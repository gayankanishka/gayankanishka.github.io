export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    company: 'IGT1 Lanka',
    role: 'Lead Software Engineer',
    period: 'Nov 2024 – Present',
    location: 'Colombo',
    description:
      'Leading multiple development teams on a large scale Field Service Management platform for a US based client within a cloud native AWS environment.',
    highlights: [
      'Leading and coordinating multiple teams across sprint planning and technical direction',
      'Serving as primary technical point of contact for cross functional stakeholders',
      'Full stack feature delivery using .NET 8, React, Node.js, and AWS',
      'Driving system architecture decisions and legacy modernization initiatives',
    ],
    tech: ['C#','.NET 8', '.NET Framework', 'JavaScript', 'TypeScript', 'React', 'AngularJS', 'Node.js', 'AWS', 'SQL Server', 'Classic ASP', 'VB'],
  },
  {
    company: 'IFS',
    role: 'Senior Software Engineer → Lead Software Engineer',
    period: 'Aug 2021 – Oct 2024',
    location: 'Colombo',
    description:
      'Progressed from Senior to Lead Software Engineer on a large scale FSM platform, expanding ownership across multiple development teams.',
    highlights: [
      'Promoted to Lead SE coordinated teams and drove technical direction',
      'Engineered full stack features using C#, .NET 6, React, AngularJS, Classic ASP, and Node.js',
      'Mentored junior and midlevel engineers through code reviews and knowledge sharing',
      'Authored comprehensive system design documentation and API references',
    ],
    tech: ['C#', '.NET 6', '.NET Framework', 'JavaScript', 'TypeScript', 'React', 'AngularJS', 'Node.js', 'AWS', 'SQL Server', 'Classic ASP', 'VB'],
  },
  {
    company: 'Virtusa',
    role: 'Associate Software Engineer → Software Engineer',
    period: 'Mar 2018 – Aug 2021',
    location: 'Colombo',
    description:
      'Worked on a large scale US based e-commerce platform with cloud native microservices architecture, growing from Associate to Software Engineer.',
    highlights: [
      'Delivered full stack features on a high traffic e-commerce platform',
      'Built microservices using .NET Core and Azure Service Fabric',
      'Led a dedicated web accessibility (WCAG) compliance project',
      'Contributed to Auth0 identity integration and Sitecore CMS projects',
    ],
    tech: ['C#', '.NET Core', 'Angular', 'JavaScript', 'TypeScript', 'Azure', 'Service Fabric', 'Docker', 'Auth0', 'Sitecore CMS'],
  },
  {
    company: 'vCube Network Solutions',
    role: 'Associate Software Engineer',
    period: 'Sep 2017 – Mar 2018',
    location: 'Sri Lanka',
    description:
      'Contributed to full stack development across multiple client facing and internal projects within a 15 person engineering team.',
    highlights: [
      'Developed web applications using .NET Framework',
      'Designed and optimized MySQL databases',
      'Built responsive interfaces using HTML, CSS, and JavaScript',
    ],
    tech: ['.NET Framework', 'C#', 'Entity Framework', 'MySQL', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
  },
]
