import { Section, SectionTitle } from '@/components/ui/';
import { data } from '@/data/data';
import './App.css';

function App() {
	return (
		<main className='w-[81.6rem] h-[105.462rem] mx-auto p-6 bg-white'>
			<h1 className='text-4xl font-bold text-center mb-1'>{data.name}</h1>
			<p className='text-lg font-semibold text-green-600 mb-4 flex items-center justify-center gap-4'>
				<span>{data.location}</span>
				<span>|</span>
				<span>{data.phone}</span>
				<span>|</span>
				<span>{data.email}</span>
				<span>|</span>
				<span>{data.linkedin}</span>
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
