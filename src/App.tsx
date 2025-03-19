import { Section, SectionTitle } from '@/components/ui/';
import { Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { data, language } from '@/data/data';
import './App.css';

function App() {
	const {
		name,
		location,
		phone,
		email,
		linkedin,
		summary,
		skills,
		experience,
		education,
	} = data;
	return (
		<main className='w-[81.6rem] h-[105.462rem] mx-auto p-6 bg-white'>
			<h1 className='text-4xl font-bold text-center mb-1'>{name}</h1>
			<p className='text-lg font-semibold text-theme mb-4 flex items-center justify-center gap-4'>
				<span className='flex items-center gap-2'>
					<MapPin size={13} />
					{location}
				</span>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href={`tel:${phone.trim()}`}
					target='_blank'
				>
					<Phone size={13} />
					{phone}
				</a>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href={`mailto:${email}`}
					target='_blank'
				>
					<Mail size={13} />
					{email}
				</a>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href={`https://www.linkedin.com/in/${linkedin}`}
					target='_blank'
				>
					<Linkedin size={13} />
					{`linkedin.com/in/${linkedin}`}
				</a>
			</p>
			<SectionTitle title={language ? 'PROFILE' : 'PERFIL'} />
			<p className='text-base mb-4'>{summary}</p>
			<Section title={language ? 'SKILLS' : 'HABILIDADES'} items={skills} />
			<Section
				title={language ? 'EXPERIENCE' : 'EXPERIENCIA'}
				items={experience}
			/>
			<Section title={language ? 'EDUCATION' : 'EDUCACIÓN'} items={education} />
		</main>
	);
}

App.displayName = 'App';

export default App;
