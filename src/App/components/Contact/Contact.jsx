import { FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
	return (
		<section id='contact' className='w-full h-auto flex justify-between'>
			<h3 className='contact flex text-emerald-400 font-oswald text-xl'>
				<FiPhone className='mr-2 self-center' />
				+56 (9) 8274 9139
			</h3>
			<h3 className='contact flex text-emerald-400 font-oswald text-xl'>
				<FiMail className='mr-2 self-center' />
				RUBENPENAP@GMAIL.COM
			</h3>
		</section>
	);
};

export default Contact;
