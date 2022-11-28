import { isVisible } from '@testing-library/user-event/dist/utils';
import Grid from '@mui/material/Grid';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Education } from './Education/education';
import { Experience } from './Experience/experience';
import Container from '@mui/material/Container';
import { useInView } from 'react-intersection-observer';

import "./resumeSection.css";
// import { Skills } from './Skills/skills';
// import { Certificates } from './Certificates/certificates';

export function ResumeSection() {
    const {ref: educationRef, inView: educationInView} = useInView({threshold : 0.5});
    const {ref: experienceRef, inView: experienceInView} = useInView({threshold : 0.6});
    // const {ref: skillsRef, inView: skillsInView} = useInView({threshold : 0.5});
    // const{ref: certificatesRef, inView: certificatesInView} = useInView({threshold: 0.5});

    return (
        <section id="resume" className="resumeContainer">
            <Container>
                <Grid container direction="row" justifyItems="center">
                    <Grid item xs={12} sm={12} md={3} className="rightSection">
                        <a href="#education" className={educationInView ? "current" : ""}><span>Education</span></a>
                        <a href="#experience" className={experienceInView ? "current" : ""}>Experience</a>
                        {/* <a href="#cerificates" className={certificatesInView ? "current" : ""}>Certifications</a> */}
                        {/* <a href="#skills" className={skillsInView ? "current" : ""}>Skills</a> */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} className="leftSection">
                        <Education educationRef={educationRef} />
                        <Experience experienceRef={experienceRef} />
                        {/* <Certificates certificatesRef={certificatesRef}/> */}
                        {/* <Skills skillsRef={skillsRef}/> */}
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}
