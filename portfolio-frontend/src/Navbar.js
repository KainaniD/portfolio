function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 right-0 p-4">
        <div className="flex justify-between">
          <a href="/" className="text-5xl">KAINANI DOWELL</a>
          <h2 id="currentMode" className="text-right"></h2>
        </div>
    </div>
  );
}

export default Navbar;
