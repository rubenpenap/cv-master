export type Data = {
	name: string;
	location: string;
	phone: string;
	email: string;
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
	name: 'NOMBRE APELLIDO',
	location: 'Santiago, Chile',
	phone: '+56 9 1234 5678',
	email: 'email@gmail.com',
	experience: [
		{
			id: `experience-1`,
			name: 'Cumplo',
			title: 'Frontend Developer',
			location: 'Santiago, Chile',
			startDate: 'Enero 2000',
			endDate: 'Enero 2000',
			activities: [
				'Desarrollo de aplicaciones web, principalmente en ReactJS y VueJS.',
				'Mantenimiento de aplicaciones existentes.',
				'Desarrollo de nuevas funcionalidades.',
			],
		},
		{
			id: `experience-2`,
			name: 'Cumplo',
			title: 'Frontend Developer',
			location: 'Santiago, Chile',
			startDate: 'Enero 2000',
			endDate: 'Enero 2000',
			activities: [
				'Desarrollo de aplicaciones web, principalmente en ReactJS y VueJS.',
				'Mantenimiento de aplicaciones existentes.',
				'Desarrollo de nuevas funcionalidades.',
			],
		},
	],
	education: [
		{
			id: `education-1`,
			name: 'Universidad de Chile',
			title: 'Ingeniero en Informática',
			location: 'Santiago, Chile',
			endDate: 'Enero 2000',
		},
	],
	skills: [
		'ReactJS',
		'VueJS',
		'NodeJS',
		'Express',
		'MongoDB',
		'PostgreSQL',
		'Git',
		'Docker',
		'Kubernetes',
		'AWS',
		'Azure',
		'Google Cloud Platform',
	],
};
