export interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['C#', '.NET', '.NET Core', '.NET Framework', 'Node.js', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Angular', 'AngularJS', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['Microsoft SQL Server', 'PostgreSQL', 'Redis', 'MySQL', 'DynamoDB', 'Database Design', 'Query Optimization'],
  },
  {
    title: 'Cloud',
    icon: '☁️',
    skills: ['AWS', 'Microsoft Azure'],
  },
  {
    title: 'Architecture',
    icon: '🏗️',
    skills: ['Serverless Stack', 'Microservices', 'Modular Monoliths', 'Monoliths'],
  },
  {
    title: 'Leadership',
    icon: '🚀',
    skills: ['Engineering Leadership', 'Technical Leadership', 'Mentoring'],
  },
]
