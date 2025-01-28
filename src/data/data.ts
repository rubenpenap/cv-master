export type Data = {
	name: string;
	location: string;
	phone: string;
	email: string;
	summary: string;
	experience: Item[];
	education: Item[];
	skills: string[];
};

export type Item = {
	id: string;
	name: string;
	title: string;
	location: string;
	startDate?: string;
	endDate: string;
	activities?: string[];
};

export type ResumeSections = Array<Item> | string[];

export const data: Data = {
	name: 'RUBEN ESTEBAN PEÑA PARADA',
	location: 'Santiago, Chile',
	phone: '+56 9 8274 9139',
	email: 'rubenpenap@gmail.com',
	summary:
		'Technical leader with experience in frontend development and modern architectures. Specialized in React, TypeScript, and designing scalable solutions, focusing on improving customer experience and fostering high-performance teams.',
	experience: [
		{
			id: 'experience-1',
			name: 'Scotiabank',
			title: 'Technical Lead',
			location: 'Santiago, Chile',
			startDate: 'February 2023',
			endDate: 'Present',
			activities: [
				'Led an agile development team, reducing project delivery times by 25% through the implementation of Scrum and TDD methodologies.',
				'Increased the adoption of technological solutions by 40%, leading digital transformation initiatives aligned with business objectives.',
				'Designed and implemented modern architectures based on Cloud, APIs, and microservices, improving scalability and operational efficiency.',
				'Supervised multidisciplinary teams and managed over 3 regional projects simultaneously, achieving 95% stakeholder satisfaction.',
				'Managed investment and operational budgets, prioritizing key initiatives to maximize return on investment.',
				'Promoted a culture of continuous improvement through mentorships and the development of technical competencies within the team.',
				'Implemented innovative solutions that optimized internal banking processes, reducing processing time by 30%.',
				'Facilitated collaboration between architecture and security teams to ensure the implementation of enterprise standards.',
				'Organized technical workshops to integrate development practices like TDD, enhancing software quality.',
			],
		},
		{
			id: 'experience-2',
			name: 'NTT DATA Europe & Latam',
			title: 'Technical Lead',
			location: 'Santiago, Chile',
			startDate: 'September 2022',
			endDate: 'February 2023',
			activities: [
				'Led an agile development team, reducing development times by 20% through process optimization and agile methodologies.',
				'Implemented modern technological solutions, including microservices and microfrontends, increasing efficiency by 30%.',
				'Fostered effective collaboration between stakeholders and technical teams, ensuring developments aligned with business goals.',
				'Mentored team members, promoting continuous learning and the adoption of best development practices.',
				'Supervised the on-time delivery of critical projects, achieving 100% compliance with established deadlines.',
				'Ensured compliance with security regulations and quality standards at every development stage.',
				'Introduced modern frameworks to improve code modularity, facilitating maintenance and system scalability.',
				'Collaborated in the technical definition of strategic projects with architects and business analysts.',
				'Managed the adoption of DevOps methodologies to enhance continuous integration and delivery workflows.',
			],
		},
		{
			id: 'experience-3',
			name: 'NTT DATA Europe & Latam',
			title: 'Senior Software Engineer',
			location: 'Santiago, Chile',
			startDate: 'September 2021',
			endDate: 'September 2022',
			activities: [
				'Contributed to the development of scalable technological solutions, optimizing processes and improving user experience by 25%.',
				'Designed and developed intuitive interfaces, increasing end-user satisfaction by 20%.',
				'Participated in code reviews, ensuring quality and consistency in each deliverable through best practices like TDD.',
				'Implemented improvements in development workflows through the adoption of tools and agile methodologies, reducing production defects by 15%.',
				"Fostered interdisciplinary collaboration between teams, ensuring alignment with the company's strategic objectives.",
				'Automated repetitive processes through scripts and customized tools, saving the team hours of manual work.',
				'Reduced technical debt in existing projects by modernizing key components of the technology stack.',
				'Trained new developers in the use of frameworks and tools adopted by the team.',
				'Prototyped solutions in early project stages, enabling early validation with stakeholders.',
			],
		},
		{
			id: 'experience-4',
			name: 'NTT DATA Europe & Latam',
			title: 'Software Engineer',
			location: 'Santiago, Chile',
			startDate: 'December 2020',
			endDate: 'September 2021',
			activities: [
				'Developed technological solutions tailored to customer needs, achieving a 10% improvement in application response times.',
				'Actively participated in creating responsive user experiences, improving accessibility and usability by 15%.',
				'Applied agile methodologies like Scrum and Kanban to optimize task planning and delivery.',
				'Contributed to the integration of automated tests, increasing the reliability of developments by 20%.',
				'Collaborated with multidisciplinary teams to ensure alignment with business objectives and stakeholder expectations.',
				'Developed functional prototypes to validate requirements, reducing errors in later project phases.',
				'Proposed improvements to the structure of front-end components, enhancing code performance and maintainability.',
				'Participated in meetings with stakeholders to understand needs and propose solutions aligned with expectations.',
				'Maintained updated technical documentation to facilitate onboarding for new developers.',
			],
		},
	],
	education: [
		{
			id: 'education-1',
			name: 'Alejandro de Humboldt University',
			title: 'Computer Engineer',
			location: 'Caracas, Venezuela',
			endDate: 'November 2016',
		},
	],
	skills: [
		'JavaScript (ES6+)',
		'TypeScript',
		'HTML5',
		'CSS3',
		'React',
		'Next.js',
		'React Router',
		'Zustand',
		'Redux',
		'React Query',
		'TailwindCSS',
		'Styled Components',
		'Sass/SCSS',
		'PostCSS',
		'CSS Modules',
		'Vite',
		'Webpack',
		'Babel',
		'ESLint',
		'Prettier',
		'Jest',
		'React Testing Library',
		'Vitest',
		'Playwright',
		'Git',
		'GitHub',
		'Bitbucket',
		'Responsive Design',
		'Accessibility (WCAG)',
		'Figma',
		'Agile Methodologies (Scrum, Kanban)',
		'Code Reviews',
		'Component-based Development',
		'Clean Code',
		'Mobile-First Development',
		'Testing Driven Development (TDD)',
		'REST APIs',
		'Node.js (for frontend-related tasks)',
		'NPM/Yarn/PNPM',
		'Storybook',
		'Axios',
		'VS Code',
		'Technical mentoring for frontend teams',
		'Collaboration with design and backend teams',
		'Continuous learning of new technologies',
	],
};
