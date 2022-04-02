import Contact from '../Contact';
import Title from '../Title';
import About from '../About';
import Skills from '../Skills';
import Education from '../Education';

const Profile = () => {
  return (
    <section id='profile' className='w-5/12 h-full flex flex-col gap-y-6 p-8 text-left'>
      <Contact />
      <Title />
      <About />
      <Skills />
      <Education />
    </section>
  );
}

export default Profile;