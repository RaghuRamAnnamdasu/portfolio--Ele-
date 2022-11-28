import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { useState } from 'react';
import "./navBar.css";

export function Navbar({aboutInView, skillsInView, contactInView, projectsInView}) {

  const [displayNavLinks, setNavLinksDisplay] = useState(false);

  const showNavLinks = () => {
    setNavLinksDisplay(!displayNavLinks);
  };

  return (
    <div className="navBarContainer">
        <div className='name'>Raghu Ram Annamdasu</div>
        <div className="rightNavSection">
            <div className={displayNavLinks ? "displayNavLinks" : "leftNavLinks"}>
              <a href="#about" className={aboutInView ? "active" : ""}>About</a>
              <a href="#skills" className={skillsInView ? "active": ""}>Skills</a>
              <a href="#projects" className={projectsInView ? "active" :""}>Projects</a>
              <a href="#contact" className={contactInView ? "active" : ""}>Contact</a>
            </div>
            <div className="navBarIcon" onClick={showNavLinks}>
              <ViewHeadlineIcon />
            </div>
        </div>
    </div>
  );
}