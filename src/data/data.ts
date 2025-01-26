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
		'Líder técnico con experiencia en desarrollo frontend y arquitecturas modernas. Especializado en React, TypeScript y diseño de soluciones escalables, con un enfoque en mejorar la experiencia del cliente y fomentar el desarrollo de equipos de alto rendimiento.',
	experience: [
		{
			id: 'experience-1',
			name: 'Scotiabank',
			title: 'Technical Lead',
			location: 'Santiago, Chile',
			startDate: 'Febrero 2023',
			endDate: 'Actualidad',
			activities: [
				'Lideré una célula de desarrollo ágil, logrando reducir el tiempo de entrega de proyectos en un 25% mediante la implementación de metodologías Scrum y TDD.',
				'Aumenté la adopción de soluciones tecnológicas en un 40%, liderando iniciativas de transformación digital alineadas con los objetivos estratégicos del negocio.',
				'Diseñé e implementé arquitecturas modernas basadas en Cloud, APIs y microservicios, mejorando la escalabilidad y eficiencia operativa.',
				'Supervisé equipos multidisciplinarios y gestioné más de 3 proyectos regionales simultáneamente, alcanzando un 95% de satisfacción de los stakeholders.',
				'Controlé presupuestos de inversión y operativos, priorizando iniciativas clave para maximizar el retorno de inversión.',
				'Promoví una cultura de mejora continua mediante mentorías y desarrollo de competencias técnicas en el equipo.',
				'Implementé soluciones innovadoras que optimizaron procesos bancarios internos, reduciendo el tiempo de procesamiento en un 30%.',
				'Gestioné la colaboración entre equipos de arquitectura y seguridad para garantizar la implementación de estándares empresariales.',
				'Facilité talleres técnicos para integrar prácticas de desarrollo como TDD, mejorando la calidad del software.',
			],
		},
		{
			id: 'experience-2',
			name: 'NTT DATA Europe & Latam',
			title: 'Technical Lead',
			location: 'Santiago, Chile',
			startDate: 'Septiembre 2022',
			endDate: 'Febrero 2023',
			activities: [
				'Lideré una célula de desarrollo ágil, alcanzando una reducción del 20% en los tiempos de desarrollo a través de la optimización de procesos y el uso de metodologías ágiles.',
				'Implementé soluciones tecnológicas modernas, incluyendo microservicios y microfrontend, aumentando la eficiencia en un 30%.',
				'Fomenté una colaboración efectiva entre stakeholders y equipos técnicos, asegurando que los desarrollos estuvieran alineados con los objetivos del negocio.',
				'Mentoreé a miembros del equipo, promoviendo el aprendizaje continuo y la adopción de buenas prácticas de desarrollo.',
				'Supervisé la entrega puntual de proyectos críticos, logrando un cumplimiento del 100% en los plazos establecidos.',
				'Aseguré el cumplimiento de normativas de seguridad y estándares de calidad en cada etapa del desarrollo.',
				'Introduje frameworks modernos para mejorar la modularidad del código, facilitando el mantenimiento y la escalabilidad del sistema.',
				'Colaboré en la definición técnica de proyectos estratégicos junto a arquitectos y analistas de negocio.',
				'Gestioné el proceso de adopción de metodologías DevOps para mejorar los flujos de integración y entrega continua.',
			],
		},
		{
			id: 'experience-3',
			name: 'NTT DATA Europe & Latam',
			title: 'Senior Software Engineer',
			location: 'Santiago, Chile',
			startDate: 'Septiembre 2021',
			endDate: 'Septiembre 2022',
			activities: [
				'Contribuí al desarrollo de soluciones tecnológicas escalables, optimizando procesos y mejorando la experiencia de usuario en un 25%.',
				'Diseñé y desarrollé interfaces intuitivas, logrando un incremento del 20% en la satisfacción del usuario final.',
				'Participé en revisiones de código, asegurando la calidad y consistencia en cada entregable mediante buenas prácticas como TDD.',
				'Implementé mejoras en el flujo de desarrollo mediante la adopción de herramientas y metodologías ágiles, reduciendo defectos en producción en un 15%.',
				'Fomenté la colaboración interdisciplinaria entre equipos, asegurando la alineación con los objetivos estratégicos de la empresa.',
				'Automaticé procesos repetitivos mediante scripts y herramientas personalizadas, ahorrando horas de trabajo manual al equipo.',
				'Reduje la deuda técnica de proyectos existentes al modernizar componentes clave en el stack tecnológico.',
				'Capacité a nuevos desarrolladores en el uso de frameworks y herramientas adoptadas por el equipo.',
				'Prototipé soluciones en etapas tempranas de proyectos, permitiendo la validación temprana con stakeholders.',
			],
		},
		{
			id: 'experience-4',
			name: 'NTT DATA Europe & Latam',
			title: 'Software Engineer',
			location: 'Santiago, Chile',
			startDate: 'Diciembre 2020',
			endDate: 'Septiembre 2021',
			activities: [
				'Desarrollé soluciones tecnológicas adaptadas a las necesidades del cliente, logrando un 10% de mejora en el tiempo de respuesta de las aplicaciones.',
				'Participé activamente en la creación de experiencias de usuario responsivas, mejorando la accesibilidad y usabilidad en un 15%.',
				'Apliqué metodologías ágiles como Scrum y Kanban para optimizar la planificación y entrega de tareas.',
				'Contribuí en la integración de pruebas automáticas, aumentando la confiabilidad de los desarrollos en un 20%.',
				'Colaboré con equipos multidisciplinarios para garantizar la alineación con los objetivos del negocio y las expectativas de los stakeholders.',
				'Desarrollé prototipos funcionales para validar requerimientos, reduciendo errores en fases posteriores del proyecto.',
				'Propuse mejoras en la estructura de componentes front-end, mejorando el rendimiento y la mantenibilidad del código.',
				'Participé en reuniones con stakeholders para comprender necesidades y proponer soluciones alineadas a las expectativas.',
				'Mantuve documentación técnica actualizada para facilitar el onboarding de nuevos desarrolladores.',
			],
		},
	],
	education: [
		{
			id: 'education-1',
			name: 'Universidad Alejandro de Humboldt',
			title: 'Ingeniero en Informática',
			location: 'Caracas, Venezuela',
			endDate: 'Noviembre 2016',
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
		'Accesibilidad',
		'Figma',
		'Metodologías Ágiles (Scrum, Kanban)',
		'Code Reviews',
		'Desarrollo basado en componentes',
		'Clean Code',
		'Desarrollo Mobile First',
		'Testing Driven Development (TDD)',
		'REST APIs',
		'Node.js (para tareas relacionadas con el desarrollo frontend)',
		'NPM/Yarn/PNPM',
		'Storybook',
		'Axios',
		'VS Code',
		'Mentoría técnica para equipos de frontend',
		'Colaboración con diseño y backend',
		'Capacidad de aprendizaje continuo en nuevas tecnologías',
	],
};
