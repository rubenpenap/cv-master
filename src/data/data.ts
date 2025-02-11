export type Data = {
	cvLanguage: 'spanish' | 'english';
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
	cvLanguage: 'english',
	name: 'RUBEN ESTEBAN PEÑA PARADA',
	location: 'Santiago, Chile',
	phone: '+56 9 8274 9139',
	email: 'rubenpenap@gmail.com',
	linkedin: 'linkedin.com/in/rubenpenap/',
	summary:
		'Soy un Líder Técnico con amplia experiencia en gestión de proyectos y en la dirección de equipos multidisciplinarios en entornos de alta demanda. He encabezado iniciativas críticas para clientes importantes como Scotiabank Chile, implementando soluciones innovadoras para optimizar la experiencia de usuario y fortalecer la resiliencia operativa. Mi experiencia en planificación estratégica, mejora continua y colaboración interfuncional ha generado resultados medibles, mejorado la eficiencia y fomentado el desarrollo del talento. Estoy listo para enfrentar desafíos estratégicos y entregar valor sostenible.',
	experience: [
		{
			id: 'experience-1',
			name: 'Scotiabank Chile',
			title: 'Líder Técnico',
			location: 'Santiago, Chile',
			startDate: 'Febrero 2023',
			endDate: 'Enero 2025',
			activities: [
				'Lideré a 8 desarrolladores para optimizar la plataforma de gamificación, desacoplando el SDK de ofertas y reduciendo los tiempos de carga un 95,5%.',
				'Desarrollé nuevos tipos de ofertas eliminando el SDK, permitiendo obtener insights de BI más enriquecidos y campañas más efectivas.',
				'Implementé procesos ágiles que mejoraron la comunicación del equipo y aseguraron entregas limpias y puntuales sin retrocesos.',
				'Encabecé un equipo regional que creó una herramienta de simulación hipotecaria, automatizando procesos y generando insights normativos.',
			],
		},
		{
			id: 'experience-2',
			name: 'NTT DATA Europe & Latam',
			title: 'Líder Técnico',
			location: 'Santiago, Chile',
			startDate: 'Septiembre 2022',
			endDate: 'Febrero 2023',
			activities: [
				'Mentoricé a ingenieras, potenciando sus habilidades y fomentando un crecimiento individual y colaborativo que llevó a promociones.',
				'Lideré el desarrollo de la plataforma de gamificación del banco, mejorando el programa de fidelización y la participación de los clientes.',
				'Colaboré de forma transversal con equipos de BI y de negocio para impulsar mejoras en el producto y alinear los objetivos estratégicos.',
			],
		},
		{
			id: 'experience-3',
			title: 'Ingeniero de Software Senior',
			startDate: 'Septiembre 2021',
			endDate: 'Septiembre 2022',
			activities: [
				'Contribuí al desarrollo e implementación de la funcionalidad Apple Pay en Scotiabank Chile, ofreciendo una solución de pago móvil segura y sin interrupciones.',
				'Contribuí a la biblioteca interna de componentes, estandarizando las prácticas de desarrollo en los proyectos.',
				'Participé en procesos de incorporación, capacitación y reclutamiento, fortaleciendo las capacidades del equipo y la adquisición de talento.',
			],
		},
		{
			id: 'experience-4',
			title: 'Ingeniero de Software',
			startDate: 'Diciembre 2020',
			endDate: 'Septiembre 2021',
			activities: [
				'Desarrollé una solución microfrontend para el bloqueo y reemplazo de tarjetas, ofreciendo una experiencia web moderna para Scotiabank Chile.',
				'Contribuí al primer ejercicio DR en la nube, logrando un éxito del 100% y reforzando la resiliencia operativa.',
				'Mejoré continuamente las funcionalidades, asegurando un rendimiento óptimo del sistema y la satisfacción del usuario.',
			],
		},
		{
			id: 'experience-5',
			name: 'Productos Mitre',
			title: 'Web Master',
			location: 'Santiago, Chile',
			startDate: 'Agosto 2019',
			endDate: 'Febrero 2020',
			activities: [
				'Desarrollé una nueva plataforma de comercio electrónico para la marca, mejorando significativamente los tiempos de carga y la experiencia del usuario.',
				'Gestioné el sistema de comercio electrónico subiendo formatos de producto estandarizados y contribuyendo a la creación de contenido web.',
				'Optimizé la gestión de pedidos reestructurando los procesos de principio a fin, logrando reducciones significativas en los tiempos de procesamiento.',
			],
		},
		{
			id: 'experience-6',
			name: 'Freelance',
			title: 'Desarrollador Web',
			location: 'Venezuela, Colombia, Estados Unidos y Chile',
			startDate: 'Enero 2010',
			endDate: 'Agosto 2019',
			activities: [
				'Construí sitios de comercio electrónico personalizados para diversos clientes freelance, ofreciendo plataformas robustas y orientadas a la conversión.',
				'Desarrollé landing pages de alto impacto alineadas con campañas de marketing para impulsar un compromiso específico.',
				'Gestioné operaciones continuas de comercio electrónico, incluyendo el mantenimiento del sitio y la optimización del rendimiento.',
			],
		},
		{
			id: 'experience-7',
			name: 'Nivel Press',
			title: 'Desarrollador Web',
			location: 'Caracas, Venezuela',
			startDate: 'Septiembre 2012',
			endDate: 'Diciembre 2017',
			activities: [
				'Construí una plataforma e-commerce para un cliente colombiano de equipos de seguridad, integrando pasarelas seguras y optimizando la experiencia.',
				'Desarrollé una plataforma de comercio electrónico para una nueva marca de productos para bebés que agotó todo su stock en tres meses.',
				'Desarrollé landing pages de alto impacto para varios clientes, adaptadas a sus campañas de marketing para generar un compromiso significativo.',
			],
		},
		{
			id: 'experience-8',
			name: 'Wuaraira Publicidad',
			title: 'Desarrollador Web',
			location: 'Caracas, Venezuela',
			startDate: 'Enero 2008',
			endDate: 'Diciembre 2011',
			activities: [
				'Adquirí experiencia en producción gráfica, maquetación, fotografía, diseño gráfico y web, utilizando plataformas CMS para una gestión de contenido eficiente.',
				'Desarrollé el sitio de Papajhon con tecnologías de primera generación, superando desafíos para brindar una experiencia responsiva y amigable.',
			],
		},
	],
	education: [
		{
			id: 'education-1',
			name: 'Alejandro de Humboldt University',
			title: 'Ingeniero en Informática',
			location: 'Caracas, Venezuela',
			endDate: 'Noviembre 2016',
		},
	],
	skills: {
		technical: [
			'Accessibility (WCAG)',
			'Administración de estado (Zustand, Redux, React Query)',
			'Build Tools (Vite, Webpack, Babel)',
			'CSS3',
			'Desarrollo Mobile-First',
			'Estilado (TailwindCSS, Styled Components, Sass/SCSS, PostCSS, CSS Modules)',
			'Frontend con Node.js',
			'HTML5',
			'JavaScript (ES6+)',
			'React (Next.js, React Router)',
			'Responsive Design',
			'REST APIs',
			'TDD (Testing Driven Development)',
			'Testing (Jest, React Testing Library, Vitest)',
			'TypeScript',
		],
		tools: [
			'Axios',
			'Bitbucket',
			'Chrome DevTools',
			'Confluence',
			'Figma',
			'Git',
			'GitHub',
			'Jira',
			'Microsoft Teams',
			'Postman',
			'Slack',
			'Storybook',
			'VS Code',
		],
		softs: [
			'Adaptabilidad',
			'Aprendizaje Continuo',
			'Colaboración',
			'Comunicación',
			'Cooperación',
			'Gestión del Tiempo',
			'Liderazgo',
			'Mejora Continua',
			'Mentoría Técnica',
			'Metodologías Ágiles (Scrum, Kanban)',
			'Pensamiento Crítico',
			'PERT/CPM',
			'Planificación',
			'Resolución de Problemas',
			'Toma de Decisiones',
			'Trabajo en Equipo',
		],
	},
};

export const language: boolean = data.cvLanguage === 'english';
