import { Separator } from '@/components/ui/separator';
import './App.css';

function App() {
	return (
		<main className='w-[81.6rem] h-[105.462rem] mt-10 mx-auto p-6 bg-white'>
			<section>
				<h2 className='text-center scroll-m-20 text-xl font-semibold tracking-tight'>
					DATOS
				</h2>
				<Separator className='my-1 bg-gray-600 h-[.15rem]' />
			</section>
			<section>
				<h2 className='text-center scroll-m-20 text-xl font-semibold tracking-tight'>
					EXPERIENCIA
				</h2>
				<Separator className='my-1 bg-gray-600 h-[.15rem]' />
			</section>
			<section>
				<h2 className='text-center scroll-m-20 text-xl font-semibold tracking-tight'>
					CERTIFICACIONES
				</h2>
				<Separator className='my-1 bg-gray-600 h-[.15rem]' />
			</section>
			<section>
				<h2 className='text-center scroll-m-20 text-xl font-semibold tracking-tight'>
					ESTUDIOS
				</h2>
				<Separator className='my-1 bg-gray-600 h-[.15rem]' />
			</section>
		</main>
	);
}

export default App;
