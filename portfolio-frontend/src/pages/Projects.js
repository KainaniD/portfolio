import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ProjectTile from "../page-elements/ProjectTile";

function Projects() {
    return (
        <div id="pageProjects" className="page flex flex-col md:grid md:grid-cols-2 md:grid-flow-row-dense md:mr-60 gap-1">
            <ProjectTile icon={faArrowUpRightFromSquare} title="Tabletop-Simulator" description="A simple website where you can play any card game online with your friends." link="https://tabletop-simulator.netlify.app/register" linktext="Visit the website here! (for desktop users only)" />
            <ProjectTile icon={faArrowUpRightFromSquare} title="Linux Kernel" description="A rudimentary linux Operating System kernel" link="https://github.com/KainaniD/linux-kernel" linktext="Github Link" />
            <ProjectTile icon={faArrowUpRightFromSquare} title="MERN Template" description="A simple MERN stack login template" link="https://github.com/KainaniD/MERN-loginTemplate" linktext="Github Link" />
            <ProjectTile icon={faArrowUpRightFromSquare} title="Morse Code Trainer" description="An app where you can learn and practice morse code intuitively" link="https://github.com/KainaniD/Morse-Code-Application" linktext="Github Link" />
        </div>
    );
  }
  
  export default Projects;
  