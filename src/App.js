import { useInView } from 'react-intersection-observer';

import { AboutSection } from './AboutSection/aboutSection';
import { Contact } from './Contact/contact';
import { Navbar } from './Navbar/navBar';
import { ResumeSection } from './ResumeSection/resumeSection';
import { Projects } from './Projects/projects';
import { Skills } from './Skills/skills';

import "./App.css";

function App() {
  // const {ref: homeRef, inView: homeInView} = useInView({threshold : 0.5});
  const {ref: aboutRef, inView: aboutInView} = useInView({threshold : 1});
  const {ref: skillsRef, inView: skillsInView} = useInView({threshold : 0.6});
  const {ref: projectsRef, inView: projectsInView} = useInView({threshold : 0.5});
  const {ref: contactRef, inView: contactInView} = useInView({threshold : 0.5});
  return (
    <div className="App">
      <Navbar aboutInView={aboutInView} skillsInView={skillsInView} contactInView={contactInView} projectsInView={projectsInView}/>
      <div className='mainContent'>
        <AboutSection aboutRef={aboutRef}/>
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        <ResumeSection />
        <Contact contactRef={contactRef}/>
      </div>
    </div>
  );
}

export default App;
