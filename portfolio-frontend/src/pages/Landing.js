import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function Landing(props) {
  return (
    <div id="pageLanding" className="page grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="pb-10">
        <h1 className="mb-4 font-bold">Hi there!</h1>
        <h2>I'm Kai, <br /> a full-stack devloper and computational linguist based in Los Angeles</h2>
      </div>
      <div className="flex flex-col justify-between py-10">
        <div className="mx-auto ">
        <h3 id="toggleText" className="text-center mb-12">Click me!</h3>
        <motion.div 
            whileHover={{scale: 1.2}} 
            whileTap={{scale: 0.9}}
          >
        <img id="toggle" className="mode-toggle aspect-square" onClick={props.toggle}></img>
        </motion.div>
        </div>
        <div>
            <h3 className="text-center">scroll</h3>
            <motion.div
              animate={{y: [0, 10, 0]}}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity
              }}

            >
            <h2 className="text-center justify-self-center"><FontAwesomeIcon icon={faChevronDown} /></h2>
            </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
