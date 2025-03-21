import { Section, SectionTitle } from '@/components/ui/';
import { Linkedin, MapPin, Mail, Phone, Github, Globe } from 'lucide-react';
import { data, language } from '@/data/data';
import './App.css';

function App() {
	const {
		name,
		location,
		phone,
		email,
		linkedin,
		github,
		website,
		summary,
		skills,
		experience,
		education,
	} = data;
	return (
		<main className='w-[81.6rem] h-[105.462rem] mx-auto p-6 bg-white'>
			<h1 className='text-4xl font-bold text-center mb-1'>{name}</h1>
			<p className='text-lg font-semibold text-theme mb-4 flex items-center justify-center gap-4'>
				{location && (
					<>
						<span className='flex items-center gap-2'>
							<MapPin size={iconSize} />
							{location}
						</span>
						<span>|</span>
					</>
				)}
				<a
					className='flex items-center gap-2'
					href={`tel:${phone.trim()}`}
					target='_blank'
				>
					<Phone size={iconSize} />
					{phone}
				</a>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href={`mailto:${email}`}
					target='_blank'
				>
					<Mail size={iconSize} />
					{email}
				</a>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href={`https://linkedin.com/in/${linkedin}`}
					target='_blank'
				>
					<Linkedin size={iconSize} />
					{`linkedin.com/in/${linkedin}`}
				</a>
				{github && (
					<>
						<span>|</span>
						<a
							className='flex items-center gap-2'
							href={`https://github.com/${github}`}
							target='_blank'
						>
							<Github size={iconSize} />
							{`github.com/${github}`}
						</a>
					</>
				)}
				{website && (
					<>
						<span>|</span>
						<a
							className='flex items-center gap-2'
							href={`https://${website}`}
							target='_blank'
						>
							<Globe size={iconSize} />
							{website}
						</a>
					</>
				)}
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

export const iconSize = 13;

export default App;
