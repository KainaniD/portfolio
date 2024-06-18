import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
    return (
        <div id="pageContact" className="page flex flex-col gap-6">
            <h2>Contact Me!</h2>
            <a href="https://www.linkedin.com/in/kainani-dowell-087128264/" target="_blank" className="text-xl">
                <FontAwesomeIcon className="icon" icon={faLinkedin} /> Linkedin
            </a>
            <a href="mailto:kainanidowell@gmail.com" target="_blank" className="text-xl">
                <FontAwesomeIcon className="icon" icon={faEnvelope} /> Email
            </a>
            <a href="https://github.com/KainaniD" target="_blank" className="text-xl">
                <FontAwesomeIcon className="icon" icon={faGithub} /> Github
            </a>
        </div>
    );
}

export default Contact;
