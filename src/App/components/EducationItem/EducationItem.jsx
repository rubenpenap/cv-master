const EducationItem = props => {
  const { year, degree, house } = props;
  const degreeClass = degree.split(' ').join('-').toLowerCase();
  return (
    <div id={degreeClass} className='w-full h-auto px-8 py-1.5 border-l-2 border-emerald-400'>
      <p className='font-oswald font-light text-md'>{year}</p>
      <p className='font-oswald font-semibold text-xl relative before:content before:absolute before:w-4 before:h-5 before:bg-emerald-400 before:top-1 before:-left-[2.1rem]'>{degree}</p>
      <p className='font-poppins font-light text-lg'>{house}</p>
    </div>
  );
}

export default EducationItem;