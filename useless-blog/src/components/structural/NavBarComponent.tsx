import { Link } from "react-router-dom";

export const NavBarComponent: React.FC = () => {
    return <>
        <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <Link to="/" className="text-white text-2xl font-bold">
                Useless Emporium Blog
            </Link>

            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
                <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Comics</Link>
                <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Blogs</Link>
                <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Videos</Link>
                <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">About Us</Link>

                <Link to="/component_test" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Tests</Link>
            </div>
        </div>
    </nav>
    </>
};