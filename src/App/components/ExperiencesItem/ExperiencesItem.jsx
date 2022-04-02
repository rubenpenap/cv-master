const ExperiencesItem = (props) => {
	const { year, job, business, children } = props;
	const jobClass = job.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
	return (
		<div
			id={jobClass}
			className='w-full h-auto pb-4 mb-4 border-b-2 border-emerald-400 last-of-type:border-none last-of-type:pb-0 last-of-type:mb-0'
		>
			<p className='font-oswald font-light text-lg'>{year}</p>
			<p className='font-oswald font-semibold text-2xl text-gray-700'>{job}</p>
			<p className='font-poppins font-light text-xl'>{business}</p>
			<ul className='text-lg font-extralight mt-2 list-none'>{children}</ul>
		</div>
	);
};

export default ExperiencesItem;
