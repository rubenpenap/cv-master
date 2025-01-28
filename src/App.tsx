import { Section } from '@/components/ui/';
import { data } from '@/data/data';
import './App.css';

function App() {
	return (
		<main className='w-[81.6rem] h-[105.462rem] mx-auto p-6 bg-white'>
			<h1 className='text-4xl font-bold text-center'>{data.name}</h1>
			<p className='text-xl text-center mb-4'>{`${data.location} | ${data.phone} | ${data.email}`}</p>
			<p className='text-lg mb-4'>{data.summary}</p>
			<Section title='EXPERIENCIA' items={data.experience} />
			<Section title='EDUCACIÓN' items={data.education} />
			<Section title='HABILIDADES' items={data.skills} />
		</main>
	);
}

App.displayName = 'App';

export default App;
