import EducationItem from '../EducationItem';

const Education = () => {
	return (
		<section id='education' className='w-full h-auto'>
			<h2 className='title-section'>EDUCACIÓN</h2>
			<div className='w-full h-auto flex flex-col'>
				<EducationItem
					year='2023-ACTUALIDAD'
					degree='EPIC WEB DEV'
					house='Kent C. Dodds - Internacional'
				/>
				<EducationItem
					year='2023-ACTUALIDAD'
					degree='EPIC REACT DEV'
					house='Kent C. Dodds - Internacional'
				/>
				<EducationItem
					year='2022-2023'
					degree='TESTING JAVASCRIPT'
					house='Kent C. Dodds - Internacional'
				/>
				<EducationItem
					year='2020-ACTUALIDAD'
					degree='ESCUELA DESARROLLO WEB'
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
