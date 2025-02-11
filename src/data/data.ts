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
	name: 'John Doe',
	location: 'City, Country',
	phone: '+1 234 567 890',
	email: 'john.doe@example.com',
	linkedin: 'linkedin.com/in/johndoe',
	summary:
		'A highly skilled Software Engineer with extensive experience in web development, project management, and team leadership. Adept at driving innovation and delivering high-quality solutions to meet business objectives.',
	experience: [
		{
			id: 'experience-1',
			name: 'Tech Corp',
			title: 'Senior Software Engineer',
			location: 'City, Country',
			startDate: 'January 2020',
			endDate: 'Present',
			activities: [
				'Led the development of a robust web application, significantly improving performance.',
				'Mentored junior developers to foster growth and knowledge sharing.',
				'Implemented agile processes that enhanced project delivery and team collaboration.',
			],
		},
		{
			id: 'experience-2',
			name: 'Dev Solutions',
			title: 'Software Engineer',
			location: 'City, Country',
			startDate: 'June 2017',
			endDate: 'December 2019',
			activities: [
				'Developed and maintained client-facing applications with high usability.',
				'Collaborated with cross-functional teams to meet project deadlines effectively.',
			],
		},
		{
			id: 'experience-3',
			name: '',
			title: 'Junior Software Engineer',
			location: '',
			startDate: 'June 2017',
			endDate: 'December 2019',
			activities: [
				'Developed and maintained client-facing applications with high usability.',
				'Collaborated with cross-functional teams to meet project deadlines effectively.',
			],
		},
	],
	education: [
		{
			id: 'education-1',
			name: 'University of Technology',
			title: 'Bachelor of Science in Computer Science',
			location: 'City, Country',
			endDate: 'May 2017',
		},
	],
	skills: {
		technical: ['JavaScript (ES6+)', 'TypeScript', 'React', 'HTML5', 'CSS3'],
		tools: ['Git', 'GitHub', 'VS Code'],
		softs: ['Teamwork', 'Communication', 'Problem Solving'],
	},
};

export const language: boolean = data.cvLanguage === 'english';
