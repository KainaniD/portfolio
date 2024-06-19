import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectTile(props) {
    if (props.icon) {
        return (
            <div>
                <h1 className="font-bold mb-4">{props.title}</h1>
                <h2 className="mb-8">{props.description}</h2>
                <a href={props.link} className="hidden lg:block"><FontAwesomeIcon icon={props.icon} /> {props.linktext}</a>
            </div>
        );
    } else {
        return (
            <div>
                <h1 className="font-bold mb-4">{props.title}</h1>
                <h2 className="mb-8">{props.description}</h2>
            </div>
        );
    }
}

export default ProjectTile;
