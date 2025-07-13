import { Link } from "react-router-dom";
import { DesktopLinksComponent } from "./DesktopLinksComponent";

export const NavBarComponent: React.FC = () => {

    return (
      <>
        <nav className="bg-gray-900 p-4 shadow-md">
          <div className="mx-auto md:ml-3 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <Link to="/" title="Home" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-700">
                <img
                  src="assets/AssetNotFound.jpg"
                  alt="Site Icon"
                  className="w-full h-full object-cover"
                ></img>
              </div>
              <p className="text-white text-2xl font-bold">
                Useless Emporium Blog
              </p>
            </Link>

            {/* Desktop nav */}
            <DesktopLinksComponent></DesktopLinksComponent>
          </div>
        </nav>
      </>
    );
};
