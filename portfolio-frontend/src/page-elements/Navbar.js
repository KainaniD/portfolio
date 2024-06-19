function Navbar() {
    return (
      <div className="navbar hidden md:flex flex-col gap-4 fixed top-0 right-0 p-4 text-right">
            <h2 className="font-bold">Navigation</h2>
            <a href="#pageLanding" className="text-2xl hover:text-4xl">Home</a>
            <a href="#pageAbout" className="text-2xl hover:text-4xl">About</a>
            <a href="#pageProjects" className="text-2xl hover:text-4xl">Projects</a>
            <a href="#pageContact" className="text-2xl hover:text-4xl">Contact</a>
      </div>
    );
  }
  
  export default Navbar;
  