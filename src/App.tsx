import { Section, SectionTitle } from '@/components/ui/';
import { Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { data } from '@/data/data';
import './App.css';

function App() {
	return (
		<main className='w-[81.6rem] h-[105.462rem] mx-auto p-6 bg-white'>
			<h1 className='text-4xl font-bold text-center mb-1'>{data.name}</h1>
			<p className='text-lg font-semibold text-green-600 mb-4 flex items-center justify-center gap-4'>
				<span className='flex items-center gap-2'>
					<MapPin size={13} />
					{data.location}
				</span>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href='tel:+1234567890'
					target='_blank'
				>
					<Phone size={13} />
					{data.phone}
				</a>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href='mailto:rubenpenap@gmail.com'
					target='_blank'
				>
					<Mail size={13} />
					{data.email}
				</a>
				<span>|</span>
				<a
					className='flex items-center gap-2'
					href='https://www.linkedin.com/in/rubenpenap/'
					target='_blank'
				>
					<Linkedin size={13} />
					{data.linkedin}
				</a>
			</p>
			<SectionTitle title='SUMMARY' />
			<p className='text-base mb-4'>{data.summary}</p>
			<Section title='SKILLS' items={data.skills} />
			<Section title='EXPERIENCE' items={data.experience} />
			<Section title='EDUCATION' items={data.education} />
		</main>
	);
}

App.displayName = 'App';

export default App;
