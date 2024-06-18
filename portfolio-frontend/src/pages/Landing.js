function Landing(props) {
  return (
    <div id="pageLanding" className="page grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="pb-10">
        <h2>Hi there!</h2>
        <br />
        <h2>I'm Kai, <br /> a full-stack devloper and computational linguist based in Los Angeles</h2>
      </div>
      <div className="py-10">
        <h3 id="toggleText" className="text-center">Click below!</h3>
        <br />
        <img id="toggle" className="mode-toggle mx-auto aspect-square" onClick={props.toggle}></img>
      </div>
    </div>
  );
}

export default Landing;
