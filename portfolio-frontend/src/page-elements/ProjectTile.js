import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion'

function ProjectTile(props) {
    if (props.icon) {
        return (
            <div className="project-tile text-wrap flex-wrap mb-2 max-w-1/2">
                <h1 className="font-bold mb-2">{props.title}</h1>
                <h2 className="hidden md:block mb-2">{props.description}</h2>
                <a className="transition-all hover:tracking-widest" href={props.link} target="_blank" ><FontAwesomeIcon icon={props.icon} /> {props.linktext}</a>
            </div>
        );
    } else {
        return (
            <div className="project-tile text-wrap flex-wrap max-w-1/2">
                <h1 className="font-bold mb-4">{props.title}</h1>
                <h2 className="hidden md:block mb-2">{props.description}</h2>
            </div>
        );
    }
}

export default ProjectTile;