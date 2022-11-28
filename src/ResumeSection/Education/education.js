import { EducationDetails } from "./constants";
import "./education.css";

export function Education({educationRef}) {
    return (
        <section ref={educationRef} id="education" className="educationContainer">
            <h2 className='educationHeading'>Education</h2>
            {
                EducationDetails.map((education, index) => {
                    return (
                        <div className='educationDetails' key={index}>
                            <div className='educationIcon'>
                                {index !== 3 && <div className='border'/>}
                                {education.icon}
                            </div>
                            <div className='educationRightNavDetails'>
                                <h2>{education.university}</h2>
                                <div className="qualification">{education.degree}</div>
                                {index !== 3 &&
                                    <div>{education.branch}</div>
                                }
                                <div>{education.location}</div>
                                <div>{education.year}</div>
                            </div>
                        </div>
                    );
                })
            }
        </section>
    );
}