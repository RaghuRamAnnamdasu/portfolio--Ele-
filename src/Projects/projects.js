import { Button } from "@mui/material";
import "./projects.css";

export function Projects({projectsRef}) {

    const projectData = [
        {
            projectImage : "./Images/carRentals.png",
            projectTitle : "Car Rentals",
            projectDescription : "A2Z Cars is a car rental application where people can book cars for rent subject to their availability based on location and time slots.",
            projectLink : "https://mellifluous-dieffenbachia-fe1424.netlify.app/",
            frontEndRepoLink : "https://github.com/RaghuRamAnnamdasu/car-rentals-frontend",
            backEndRepoLink : "https://github.com/RaghuRamAnnamdasu/car-rentals-backend"
        },
        {
            projectImage : "./Images/capstoneImage.png",
            projectTitle : "e-Learning Platform",
            projectDescription : "Learn Infinity is an e-Learning application where registered students can attend classes, avail courses and monitor their tasks & courses status.",
            projectLink : "https://frabjous-cheesecake-7e93d1.netlify.app/",
            frontEndRepoLink : "https://github.com/RaghuRamAnnamdasu/zenclass-student-dashboard-frontend",
            backEndRepoLink : "https://github.com/RaghuRamAnnamdasu/zenclass-student-dashboard-backend"
        },
        {
            projectImage : "./Images/ChatIon.png",
            projectTitle : "Chat Application",
            projectDescription : "ChatIon is a chat application where one can send/receive messages from their friends.",
            projectLink : "https://stirring-eclair-4096ec.netlify.app/",
            frontEndRepoLink : "https://github.com/RaghuRamAnnamdasu/chat-application-frontend",
            backEndRepoLink : "https://github.com/RaghuRamAnnamdasu/chat-application-backend"
        },
        {
            projectImage : "./Images/movieBlog.png",
            projectTitle : "Movie Blog",
            projectDescription : "A movie blog where viewers can find best movies with ratings and can have some fun time with games. Authorized personal can add, edit and delete movies.",
            projectLink : "https://hilarious-hamster-c1a6b2.netlify.app/",
            frontEndRepoLink : "https://github.com/RaghuRamAnnamdasu/bestMoviesBlog-frontend",
            backEndRepoLink : "https://github.com/RaghuRamAnnamdasu/bestMoviesBlog-backend"
        },
        {
            projectImage : "https://149351115.v2.pressablecdn.com/wp-content/uploads/2018/05/SO_Teams.png",
            projectTitle : "Stack Overflow Clone",
            projectDescription : "It is a question and answer website for professional and enthusiast programmers.",
            projectLink : "https://frabjous-maamoul-63a380.netlify.app/",
            frontEndRepoLink : "https://github.com/RaghuRamAnnamdasu/stack-over-flow-clone-frontend",
            backEndRepoLink : "https://github.com/RaghuRamAnnamdasu/stack-over-flow-clone-backend"
        }
    ];

    return (
        <section id="projects" ref={projectsRef} className="projectsContainer">
            <h2>Projects</h2>
            <div className="commonCredentials">
                <h3>Credentials</h3>
                <div>
                    <b>User: </b> user@gmail.com | Password: Password@123
                </div>
                <div>
                    <b>Admin: </b> admin@gmail.com | Password: Password@123
                </div>
            </div>
            <div className="projectWrapper">
                {projectData.map((project)=>{
                    return <ProjectCard projectImage={project.projectImage} projectTitle = {project.projectTitle} projectDescription = {project.projectDescription} projectLink = {project.projectLink} frontEndRepoLink = {project.frontEndRepoLink} backEndRepoLink = {project.backEndRepoLink}/>
                })}
            </div>
        </section>
    );
}


export function ProjectCard({projectImage, projectTitle, projectDescription, projectLink, frontEndRepoLink, backEndRepoLink}){
    return(
        <div className="projectCard">
            <div className = "projectImage">
                <img src={projectImage} title={projectTitle}/>
            </div>
            <div className="projectDescription">
                <h3>{projectTitle}</h3>
                <div className="description">{projectDescription}</div>
            </div>
            <div className = "buttonContainer">
                <div className="liveContainer">
                    <a href = {projectLink} target = "_blank">
                        <div className = "projectLink">Live</div>
                    </a>
                </div>
                <div className = "repoButtonEnclosure">
                    <a href = {frontEndRepoLink} target = "_blank">
                        <div className = "frontEndRepo">Front End Repo</div>
                    </a>
                    <a href = {backEndRepoLink} target = "_blank">
                        {backEndRepoLink.length ? <div className = "backEndRepo">Back End Repo</div> : null}
                    </a>
                </div>
                
            </div>
        </div>
    );
}
