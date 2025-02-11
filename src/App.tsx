import { Section, SectionTitle } from '@/components/ui/';
import { Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { data } from '@/data/data';
import './App.css';

function App() {
	return (
		<main className='w-[81.6rem] h-[105.462rem] mx-auto p-6 bg-white'>
			<h1 className='text-4xl font-bold text-center mb-1'>{data.name}</h1>
			<p className='text-lg font-semibold text-theme mb-4 flex items-center justify-center gap-4'>
				<span className='flex items-center gap-2'>
					<MapPin size={13} />
					{data.location}
				</span>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href={`tel:${data.phone}`}
					target='_blank'
				>
					<Phone size={13} />
					{data.phone}
				</a>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href={`mailto:${data.email}`}
					target='_blank'
				>
					<Mail size={13} />
					{data.email}
				</a>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href={`https://www.${data.linkedin}`}
					target='_blank'
				>
					<Linkedin size={13} />
					{data.linkedin}
				</a>
			</p>
			<SectionTitle title='PERFIL' />
			<p className='text-base mb-4'>{data.summary}</p>
			<Section title='HABILIDADES' items={data.skills} />
			<Section title='EXPERIENCIA' items={data.experience} />
			<Section title='EDUCACIÓN' items={data.education} />
		</main>
	);
}

App.displayName = 'App';

export default App;
