const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold text-blue-600">LuxStay</div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="text-gray-700 hover:text-blue-600">Rooms</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Mansions</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Countryside</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Beach</a>
        </nav>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search destinations..."
            className="border border-gray-300 rounded-full px-4 py-1 text-sm w-32 md:w-48"
          />
          <button className="text-gray-700 text-sm">Sign in</button>
          <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-md">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;