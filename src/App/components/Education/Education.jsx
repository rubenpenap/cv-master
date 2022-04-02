import EducationItem from '../EducationItem';

const Education = () => {
	return (
		<section id='education' className='w-full h-auto'>
			<h2 className='title-section'>EDUCACIÓN</h2>
			<div className='w-full h-auto flex flex-col'>
				<EducationItem
					year='2020-ACTUALIDAD'
					degree='FRONTEND CON REACT'
					house='Platzi - Internacional'
				/>
				<EducationItem
					year='2020-ACTUALIDAD'
					degree='ESCUELA DE JAVASCRIPT'
					house='Platzi - Internacional'
				/>
				<EducationItem
					year='2015-2016'
					degree='DIPLOMADO DE PROGRAMACIÓN'
					house='UneWeb - Venezuela'
				/>
				<EducationItem
					year='2013-2016'
					degree='INGENIERÍA EN INFORMÁTICA'
					house='Universidad Alejandro de Humboldt - Venezuela'
				/>
				<EducationItem
					year='2008-2010'
					degree='LICENCIATURA EN MATEMÁTICAS PURAS'
					house='Universidad Simón Bolivar - Venezuela'
				/>
			</div>
		</section>
	);
};

export default Education;
