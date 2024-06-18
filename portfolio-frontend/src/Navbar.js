function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 right-0 p-4">
        <div className="flex justify-between">
          <a href="/" className="text-5xl">KAINANI DOWELL</a>
          <p id="currentMode" className="text-right"></p>
        </div>
    </div>
  );
}

export default Navbar;
