import SkillItem from '../SkillItem';

const Skills = () => {
  return (
    <section id='skills' className='w-full h-auto'>
      <h2 className='title-section'>HABILIDADES</h2>
      <div className='w-full h-auto flex flex-wrap gap-x-10 gap-y-5'>
        <SkillItem title='HTML/CSS3/Sass' percent='after:w-[100%]' />
        <SkillItem title='Tailwind/Bootstrap' percent='after:w-[100%]' />
        <SkillItem title='Git/Github/Bitbucket' percent='after:w-[85%]' />
        <SkillItem title='Jira/Scrum/Agile' percent='after:w-[90%]' />
        <SkillItem title='UI-UX/Figma/XD' percent='after:w-[95%]' />
        <SkillItem title='Javascript/React' percent='after:w-[75%]' />
        <SkillItem title='Redux/Redux Toolkit' percent='after:w-[70%]' />
        <SkillItem title='Typescript' percent='after:w-[50%]' />
        <SkillItem title='Jest/Testing Library' percent='after:w-[70%]' />
        <SkillItem title='Node/Express' percent='after:w-[40%]' />
        <SkillItem title='API Rest' percent='after:w-[70%]' />
        <SkillItem title='Inglés' percent='after:w-[60%]' />
      </div>
    </section>
  );
}

export default Skills;