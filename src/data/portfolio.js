export const profile = {
  initials: 'MWT',
  name: 'Muhammad Wasay Tariq',
  title: 'Software Engineering Student and Full-Stack Developer',
  education: 'FAST NUCES Islamabad - BS Software Engineering, Class of 2028',
  email: 'wasaytariq05@gmail.com',
  githubLabel: 'github.com/includeduck',
  github: 'https://github.com/includeduck',
  location: 'Islamabad, Pakistan',
  summary:
    'I build complete, well-architected systems across full-stack web platforms, backend APIs, relational databases, desktop applications, and compiler pipelines.',
  detail:
    'My project work focuses on modular design, tested APIs, clean data models, and software that stays understandable after the first version ships.',
  philosophy:
    'I like starting from a specification and following it through to software that is understandable, scalable, and practical to use.',
}

export const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const metrics = [
  {
    value: '270+',
    label: 'algorithm problems solved',
  },
  {
    value: '7',
    label: 'full-stack and desktop projects shipped',
  },
  {
    value: 'Top grade',
    label: 'in university Data Structures coursework',
  },
]

export const focusAreas = [
  'Full-stack systems',
  'Backend APIs',
  'SQL Server',
  'C++ and algorithms',
  'Compiler construction',
  'Desktop applications',
]

export const projectSignals = [
  {
    label: 'Architecture',
    value: 'Compiler pipeline, layered APIs, workflow-heavy systems',
  },
  {
    label: 'Data',
    value: 'SQL Server, normalization logic, audit trails, analytics',
  },
  {
    label: 'Delivery',
    value: 'React dashboards, tested REST APIs, JavaFX and WPF tools',
  },
]

export const projects = [
  {
    title: 'GPA System',
    category: 'Full-stack',
    featured: true,
    summary:
      'A university administration platform for student management and GPA calculation, with role-based authorization and a tested REST API layer.',
    highlights: [
      'Role-based authorization with JWT',
      'REST API coverage backed by xUnit tests',
      'SQL Server data model using Entity Framework Core',
    ],
    stack: [
      'ASP.NET Core 8',
      'C#',
      'React 19',
      'TypeScript',
      'Entity Framework Core',
      'SQL Server',
      'JWT',
      'xUnit',
    ],
    repoUrl: 'https://github.com/includeduck/GPASystemProject',
  },
  {
    title: 'Smart Disaster Response',
    category: 'Workflow system',
    featured: true,
    summary:
      'A management information system for coordinating incident reporting, resource allocation, team dispatch, hospital coordination, approvals, and audit logging.',
    highlights: [
      'Approval workflows and full audit logging',
      'Spring Security backed application layer',
      'React and Tailwind interface for operational coordination',
    ],
    stack: [
      'Spring Boot',
      'Spring Security',
      'JPA/Hibernate',
      'SQL Server',
      'React',
      'Tailwind CSS',
      'Axios',
      'OpenAPI/Swagger',
    ],
    repoUrl: 'https://github.com/includeduck/SmartDisasterResponse',
  },
  {
    title: 'MiniCompiler',
    category: 'Compiler',
    featured: true,
    summary:
      'A modular compiler built around a Pipe-and-Filter architecture, threading a shared CompilerData state through lexing, parsing, semantic analysis, IR generation, optimization, and code generation.',
    highlights: [
      'Explicit pipeline manager for compilation stages',
      'Semantic analysis through code generation flow',
      'C++ implementation with CMake project structure',
    ],
    stack: ['C++', 'CMake', 'Raw pointers', 'Pipe-and-Filter architecture'],
    repoUrl: 'https://github.com/includeduck/MiniCompiler',
  },
  {
    title: 'Normalizer',
    category: 'Database tooling',
    featured: false,
    summary:
      'An educational database normalization tool that computes functional dependencies, attribute closures, candidate keys, and step-by-step BCNF decomposition.',
    highlights: [
      'Functional dependency and closure computation',
      'Candidate key discovery',
      'Guided BCNF decomposition walkthrough',
    ],
    stack: ['Java 21', 'JavaFX', 'Spring Boot', 'Maven', 'JUnit'],
    repoUrl: 'https://github.com/includeduck/Normalizer',
  },
  {
    title: 'CDIEM - Digital Investigation & Evidence Management',
    category: 'Desktop database app',
    featured: false,
    summary:
      'A chain-of-custody system for digital forensics with case registration, evidence intake, tamper handling, supervisory review, escalation workflows, and reporting.',
    highlights: [
      'Evidence intake and tamper handling',
      'Supervisor review and escalation workflows',
      'SQL Server persistence through JDBC',
    ],
    stack: [
      'Java 21',
      'JavaFX 17',
      'Maven',
      'Microsoft SQL Server',
      'JDBC',
      'FXML',
      'CSS',
    ],
    repoUrl: 'https://github.com/includeduck/CDIEM-Projct',
  },
  {
    title: 'Keyboard Analytics Platform',
    category: 'Distributed app',
    featured: false,
    summary:
      'A distributed analytics platform with a WPF desktop collector, authenticated REST API, and web dashboard for visualizing usage data.',
    highlights: [
      'Desktop collector feeding an API',
      'JWT-secured backend services',
      'React dashboard for usage visualization',
    ],
    stack: ['C#', 'WPF', 'ASP.NET Core', 'React', 'TypeScript', 'SQL Server', 'JWT'],
    repoUrl: 'https://github.com/includeduck/KeyLogger',
  },
  {
    title: 'BFSMaze',
    category: 'Algorithms',
    featured: false,
    summary:
      'A console maze game with procedurally generated mazes and an enemy that hunts the player using breadth-first search pathfinding.',
    highlights: [
      'Procedural maze generation',
      'Breadth-first search enemy pathfinding',
      'C++ STL implementation',
    ],
    stack: ['C++', 'STL', 'BFS'],
    repoUrl: 'https://github.com/includeduck/BFSMaze',
  },
]

export const skillGroups = [
  {
    title: 'Strongest in',
    tone: 'primary',
    items: [
      'C++',
      'SQL Server',
      'Data Structures and Algorithms',
      'Object-Oriented Design',
    ],
  },
  {
    title: 'Languages',
    items: ['C++', 'Java', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'Python'],
  },
  {
    title: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['ASP.NET Core', 'Spring Boot', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Databases',
    items: ['Microsoft SQL Server', 'Entity Framework Core', 'JDBC', 'Hibernate/JPA'],
  },
  {
    title: 'Tools and testing',
    items: ['Git', 'Maven', 'CMake', 'JUnit', 'xUnit', 'Linux'],
  },
  {
    title: 'Comfortable with',
    items: ['JavaScript', 'React', 'Software Architecture', 'Database Design'],
  },
  {
    title: 'Exploring',
    items: ['Python', 'Linux systems programming', 'Flask'],
  },
]

export const achievements = [
  {
    value: '270+',
    title: 'LeetCode problems',
    detail: 'Solved across data structures and algorithms.',
  },
  {
    value: 'Top grade',
    title: 'Data Structures',
    detail: 'Finished at the top of university Data Structures coursework.',
  },
  {
    value: '7 projects',
    title: 'Shipped systems',
    detail:
      'Built full-stack and desktop projects across ASP.NET Core, Spring Boot, JavaFX, React, SQL Server, and C++.',
  },
]

export const exploration = [
  'Advanced data structures and algorithms',
  'Software architecture',
  'Systems programming',
  'Compiler construction',
  'Full-stack development',
]

export const careerInterests = [
  'Software Engineer',
  'Forward-Deployed Software Engineer',
  'Harness Engineer',
  'Full-Stack Developer',
  'Software Architect',
]
