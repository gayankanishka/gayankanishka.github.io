import { writeFileSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT = resolve(__dirname, '../src/data/pinned-repos.json')

// Load .env.local manually (Node doesn't auto-load it)
try {
  const envPath = resolve(__dirname, '../.env.local')
  const lines = readFileSync(envPath, 'utf8').split('\n')
  for (const line of lines) {
    const [key, ...rest] = line.split('=')
    if (key && rest.length && !process.env[key.trim()]) {
      process.env[key.trim()] = rest.join('=').trim()
    }
  }
} catch {
  // no .env.local — that's fine in CI
}

const token = process.env.GH_TOKEN

if (!token) {
  console.warn('[fetch-pinned-repos] GH_TOKEN not set — writing empty array.')
  writeFileSync(OUTPUT, JSON.stringify([]))
  process.exit(0)
}

const res = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `{
      user(login: "gayankanishka") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              url
              description
              stargazers { totalCount }
              forkCount
              primaryLanguage { name color }
            }
          }
        }
      }
    }`,
  }),
})

if (!res.ok) {
  console.error(`[fetch-pinned-repos] GitHub API error: ${res.status}`)
  writeFileSync(OUTPUT, JSON.stringify([]))
  process.exit(0)
}

const { data } = await res.json()
const nodes = data?.user?.pinnedItems?.nodes ?? []

const repos = nodes.map((n) => ({
  id: n.id,
  name: n.name,
  description: n.description ?? null,
  html_url: n.url,
  stargazers_count: n.stargazers.totalCount,
  forks_count: n.forkCount,
  language: n.primaryLanguage?.name ?? null,
  languageColor: n.primaryLanguage?.color ?? null,
}))

writeFileSync(OUTPUT, JSON.stringify(repos, null, 2))
console.log(`[fetch-pinned-repos] Wrote ${repos.length} repos to src/data/pinned-repos.json`)
