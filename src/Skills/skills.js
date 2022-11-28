import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { SKILLS } from "./constants";
import "./skills.css";

export function Skills({skillsRef}) {
    return (
        <Container ref={skillsRef} id="skills" className="skillsContainer">
            <Grid container direction="column" justifyItems="center" alignItems="center" md={12} gap={0}>
                <Grid item>
                    <h2>Skills</h2>
                </Grid>
                <Grid item md={12}>
                    <div className="imagesContainer">
                        {
                            SKILLS.map((skill, index) => {
                                return (
                                    <div className="imageWrapper" key={index}>
                                        <img src={skill.imageURL} alt={skill.title} />
                                        <div>{skill.title}</div>
                                    </div> 
                                );
                            })
                        }
                    </div>
                </Grid>
            </Grid>
        </Container>
        // <section ref={skillsRef} id="skills" className="skillsContainer">
        //     <h2>Skills</h2>
        //     <div className="imagesContainer">
        //         {
        //             SKILLS.map((skill, index) => {
        //                 return (
        //                     <div className="imageWrapper" key={index}>
        //                         <img src={skill.imageURL} alt={skill.title} />
        //                         <div>{skill.title}</div>
        //                     </div> 
        //                 );
        //             })
        //         }
        //     </div>
        // </section>
    );
}