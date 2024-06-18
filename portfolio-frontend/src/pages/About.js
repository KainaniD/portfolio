import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
    return (
        <div id="pageAbout" className="page">
            <h1 className="mb-4 font-bold">Let's Work Together</h1>
            <h2 className="mb-8">I help people<br />make simple and ambitious websites,<br />and create machine learning models.</h2>
            <a href="mailto:kainanidowell@gmail.com?subject=Hi Kai, I'd like to hire you" target="_blank" className="text-3xl hover:text-4xl transition-all">
                <FontAwesomeIcon className="icon" icon={faEnvelope} /> Hire Me Here!
            </a>
        </div>
    );
  }
  
  export default About;
  