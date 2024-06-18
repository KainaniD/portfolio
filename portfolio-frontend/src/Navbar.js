function Navbar() {
    return (
      <div className="navbar hidden md:flex flex-col gap-4 fixed top-0 right-0 px-4 pt-20">
            <h2>Navigation</h2>
            <a href="#pageLanding" className="text-2xl hover:text-4xl text-right">Home</a>
            <a href="#pageAbout" className="text-2xl hover:text-4xl text-right">About</a>
            <a href="#pageProjects" className="text-2xl hover:text-4xl text-right">Projects</a>
            <a href="#pageContact" className="text-2xl hover:text-4xl text-right">Contact</a>
      </div>
    );
  }
  
  export default Navbar;
  