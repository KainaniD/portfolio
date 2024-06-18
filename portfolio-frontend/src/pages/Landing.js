function Landing(props) {
    return (
        <div className="page">
          <div className="h-40"></div>
          <img id="toggle" className="mode-toggle mx-auto aspect-square w-1/5" onClick={props.toggle}></img>
        </div>
    );
  }
  
  export default Landing;
  