export type Data = {
	name: string;
	location: string;
	phone: string;
	email: string;
	linkedin: string;
	summary: string;
	experience: Item[];
	education: Item[];
	skills: Skills;
};

export type Item = {
	id: string;
	name?: string;
	title: string;
	location?: string;
	startDate?: string;
	endDate: string;
	activities?: string[];
};

export type Skills = {
	technical: string[];
	tools: string[];
	softs: string[];
};

export type ResumeSections = Array<Item> | Skills;

export const data: Data = {
	name: 'RUBEN ESTEBAN PEÑA PARADA',
	location: 'Santiago, Chile',
	phone: '+56 9 8274 9139',
	email: 'rubenpenap@gmail.com',
	linkedin: 'linkedin.com/in/rubenpenap/',
	summary:
		"I am a seasoned Technical Lead with extensive experience in project management and leading multidisciplinary teams in high-demand environments. I've spearheaded critical initiatives for major clients like Scotiabank Chile, implementing innovative solutions to optimize user experience and strengthen operational resilience. My expertise in strategic planning, continuous improvement, and cross-functional collaboration has driven measurable results, enhanced efficiency, and fostered talent development. I am ready to tackle strategic challenges and deliver sustainable value.",
	experience: [
		{
			id: 'experience-1',
			name: 'Scotiabank Chile',
			title: 'Technical Lead',
			location: 'Santiago, Chile',
			startDate: 'February 2023',
			endDate: 'Present',
			activities: [
				'Led a cell of 5 internal and 3 external developers to enhance the gamification platform, decoupling the offers SDK and cutting load times by 95.5%.',
				'Developed new offer types by eliminating the SDK, enabling richer BI insights and more effective campaigns.',
				'Instituted agile processes that improved team communication and ensured on-time, clean releases without rollbacks.',
				'Spearheaded a regional team to build a mortgage credit simulation tool, automating manual processes and delivering regulatory-compliant insights.',
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
				'Mentored female engineers, boosting their skills and fostering individual and collaborative growth that led to promotions.',
				"Led the development of the bank's gamification platform, enhancing the loyalty program and customer engagement.",
				'Collaborated cross-functionally with BI and business teams to drive product improvements and align strategic goals.',
			],
		},
		{
			id: 'experience-3',
			title: 'Senior Software Engineer',
			startDate: 'September 2021',
			endDate: 'September 2022',
			activities: [
				'Contributed to the development and implementation of Apple Pay functionality at Scotiabank Chile, delivering a secure and seamless mobile payment solution.',
				'Contributed to the internal component library, standardizing development practices across projects.',
				'Participated in onboarding, training, and recruitment processes, strengthening team capabilities and talent acquisition.',
			],
		},
		{
			id: 'experience-4',
			title: 'Software Engineer',
			startDate: 'December 2020',
			endDate: 'September 2021',
			activities: [
				'Developed a microfrontend solution for card blocking and replacement, delivering a modern web experience for Scotiabank Chile.',
				'Contributed to the first-ever DR cloud exercise, achieving 100% success and reinforcing operational resilience.',
				'Continuously enhanced functionalities, ensuring optimal system performance and user satisfaction.',
			],
		},
		{
			id: 'experience-5',
			name: 'Productos Mitre',
			title: 'Web Master',
			location: 'Santiago, Chile',
			startDate: 'August 2019',
			endDate: 'Febrero 2020',
			activities: [
				'Developed a new e-commerce platform for the brand, significantly enhancing load times and user experience.',
				'Managed the e-commerce system by uploading standardized product formats and contributing to web content creation.',
				'Optimized order management by restructuring end-to-end processes, achieving significant reductions in processing times.',
			],
		},
		{
			id: 'experience-6',
			name: 'Freelance',
			title: 'Web Developer',
			location: 'Venezuela, Colombia, United States and Chile',
			startDate: 'January 2010',
			endDate: 'August 2019',
			activities: [
				'Built custom e-commerce sites for diverse freelance clients, delivering robust, conversion-focused platforms.',
				'Developed high-impact landing pages aligned with marketing campaigns to drive targeted engagement.',
				'Managed ongoing e-commerce operations, including site maintenance and performance optimization.',
			],
		},
		{
			id: 'experience-7',
			name: 'Nivel Press',
			title: 'Web Developer',
			location: 'Caracas, Venezuela',
			startDate: 'September 2012',
			endDate: 'December 2017',
			activities: [
				'Built an e-commerce platform for a major Colombian security equipment client, integrating secure payment gateways and optimizing the user experience.',
				'Developed an e-commerce platform for a new baby products brand that quickly sold out its entire stock within three months.',
				'Developed high-impact landing pages for various clients, tailored to their marketing campaigns to drive significant engagement.',
			],
		},
		{
			id: 'experience-8',
			name: 'Wuaraira Publicidad',
			title: 'Web Developer',
			location: 'Caracas, Venezuela',
			startDate: 'January 2008',
			endDate: 'December 2011',
			activities: [
				'Gained expertise in print production, layout, photography, graphic and web design, utilizing CMS platforms for streamlined content management.',
				"Developed Papajhon's website with early-generation web technologies, overcoming era-specific challenges to deliver a responsive, user-friendly experience.",
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
	skills: {
		technical: [
			'JavaScript (ES6+)',
			'TypeScript',
			'HTML5',
			'CSS3',
			'React (Next.js, React Router)',
			'State Management (Zustand, Redux, React Query)',
			'Styling (TailwindCSS, Styled Components, Sass/SCSS, PostCSS, CSS Modules)',
			'Build Tools (Vite, Webpack, Babel)',
			'Testing (Jest, React Testing Library, Vitest)',
			'Responsive Design',
			'Accessibility (WCAG)',
			'REST APIs',
			'Frontend con Node.js',
			'Mobile-First Development',
			'TDD (Testing Driven Development)',
		],
		tools: [
			'Git',
			'GitHub',
			'Bitbucket',
			'Figma',
			'Storybook',
			'Axios',
			'VS Code',
			'Chrome DevTools',
			'Postman',
			'Jira',
			'Confluence',
			'Slack',
			'Microsoft Teams',
		],
		softs: [
			'Agile Methodologies (Scrum, Kanban)',
			'Technical Mentorship',
			'Collaboration',
			'Cooperation',
			'Continuous Learning',
			'Continuous Improvement',
			'PERT/CPM',
			'Problem Solving',
			'Decision Making',
			'Critical Thinking',
			'Leadership',
			'Teamwork',
			'Adaptability',
			'Communication',
			'Time Management',
			'Planning',
		],
	},
};
