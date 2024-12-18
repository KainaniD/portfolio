import { faLinkedin, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
    return (
        <div id="pageContact" className="page no-scrollbar">
            <div className="flex flex-col float-left gap-6">
            <h1 className="font-bold">Contact Me!</h1>
            <a href="https://www.linkedin.com/in/kainani-dowell-087128264/" target="_blank" className="clickable float-left text-3xl">
                <FontAwesomeIcon className="icon" icon={faLinkedin} /> Linkedin
            </a>
            <a href="mailto:kainanidowell@gmail.com" target="_blank" className="clickable float-left text-3xl">
                <FontAwesomeIcon className="icon" icon={faEnvelope} /> Email Me
            </a>
            <a href="https://github.com/KainaniD" target="_blank" className="clickable float-left text-3xl">
                <FontAwesomeIcon className="icon" icon={faGithub} /> Github
            </a>
            <a href="https://www.youtube.com/@CodewKai" target="_blank" className="clickable float-left text-3xl">
                <FontAwesomeIcon className="icon" icon={faYoutube} /> Youtube
            </a>
            </div>
        </div>
    );
}

export default Contact;
