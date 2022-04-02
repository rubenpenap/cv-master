const SkillItem = props => {
  const { title, percent } = props;
  const titleId = title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
  return (
    <div className='w-[45.536867%]' id={titleId}>
      <p className='font-lg font-normal mb-3'>{title}</p>
      <div className={`w-full h-3 bg-emerald-200 rounded-xl relative after:bg-emerald-400 after:h-3 ${percent} after:absolute after:bottom-0 after:left-0 after:rounded-xl`}>
      </div>
    </div>
  );
}

export default SkillItem;