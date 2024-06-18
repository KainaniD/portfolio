import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ProjectTile from "../page-elements/ProjectTile";

function Projects() {
    return (
        <div id="pageProjects" className="page grid grid-cols-2 grid-flow-row-dense md:mr-60 gap-8">
            <ProjectTile icon={faArrowUpRightFromSquare} title="Tabletop-Simulator" description="A simple website where you can play any card game online with your friends." link="https://tabletop-simulator.netlify.app/register" linktext="Visit the website here! (for desktop users only)" />
            <ProjectTile title="Morse Code Trainer" description="A minimalist mobile app which lets you practice your morse code."/>
        </div>
    );
  }
  
  export default Projects;
  