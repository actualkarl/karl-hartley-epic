export const NavBar = () => (
  <nav className="bg-white shadow-sm fixed w-full z-10">
    <div className="max-w-6xl mx-auto px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="text-emerald-600 font-bold">Epic Learning</div>
        <div className="flex gap-6">
          <a href="#about" className="text-gray-600 hover:text-emerald-600">About</a>
          <a href="#services" className="text-gray-600 hover:text-emerald-600">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-emerald-600">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);