import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { ExperienceDetails } from "./constants"; 
import "./experience.css";

export function Experience({experienceRef}) {
    return (
        <div ref={experienceRef} id="experience" className="experienceContainer">
            <h2 className='exprerienceHeading'>Experience</h2>
            {
                ExperienceDetails.map((experience, index) => {
                    return (
                        <div className='experienceDetails' key={index}>
                            <div className='experienceIcon'>
                                {index !==2 && <div className='border'/>}
                                <BusinessCenterOutlinedIcon />
                            </div>
                            <div className=''>
                                <h2>{experience.profession}</h2>
                                <h4>{experience.company}</h4>
                                <div className='experienceDuration'>{experience.year}</div>
                                <ul>
                                    <li>{experience.jobDescription}</li>
                                </ul>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}