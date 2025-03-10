import { FaSearch, FaUserCircle } from 'react-icons/fa';

function Navigation() {
  return (
    <nav className="navbar justify-between border border-gray-600">
      <div className="input flex max-w-md items-center rounded-full border-2 px-4 py-2 hover:bg-white hover:text-black">
        <FaSearch />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="bg-transparent outline-none"
        />
      </div>
      <section className="flex items-center">
        <FaUserCircle className="mr-[2vw] text-3xl" />
      </section>
    </nav>
  );
}
export default Navigation;
