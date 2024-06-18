function Landing(props) {
  return (
    <div id="pageLanding" className="page grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="pb-10">
        <h1 className="mb-4 font-bold">Hi there!</h1>
        <h2>I'm Kai, <br /> a full-stack devloper and computational linguist based in Los Angeles</h2>
      </div>
      <div className="py-10">
        <h3 id="toggleText" className="text-center mb-4">Click below!</h3>
        <img id="toggle" className="mode-toggle mx-auto aspect-square" onClick={props.toggle}></img>
      </div>
    </div>
  );
}

export default Landing;
