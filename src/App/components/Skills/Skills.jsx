import SkillItem from '../SkillItem';

const Skills = () => {
	return (
		<section id='skills' className='w-full h-auto'>
			<h2 className='title-section'>HABILIDADES</h2>
			<div className='w-full h-auto flex flex-wrap gap-x-10 gap-y-5'>
				<SkillItem title='HTML/JSX/CSS/+' percent='after:w-[95%]' />
				<SkillItem title='Tailwind/Bootstrap' percent='after:w-[95%]' />
				<SkillItem title='Git/Github/Bitbucket' percent='after:w-[85%]' />
				<SkillItem title='Jira/Scrum/Agile' percent='after:w-[85%]' />
				<SkillItem title='UI-UX/Figma/XD' percent='after:w-[95%]' />
				<SkillItem title='Typescript/React' percent='after:w-[95%]' />
				<SkillItem title='State Management' percent='after:w-[80%]' />
				<SkillItem title='RTL/MSW/Jest' percent='after:w-[80%]' />
				<SkillItem title='Node/Express' percent='after:w-[40%]' />
				<SkillItem title='API Rest' percent='after:w-[70%]' />
			</div>
		</section>
	);
};

export default Skills;
