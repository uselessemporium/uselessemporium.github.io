import { Link } from "react-router-dom"
import { NavigationBaseRoutesEnum } from "../../../infrastructure/NavigationConstants";


export const DesktopLinksComponent: React.FC = () =>{

    const links = [{
        label: "Comics",
        direction: NavigationBaseRoutesEnum.COMICS
    },
    {
        label: "Blog",
        direction: NavigationBaseRoutesEnum.BLOG
    },
    {
        label: "Videos",
        direction: NavigationBaseRoutesEnum.VIDEOS
    },
    {
        label: "About",
        direction: NavigationBaseRoutesEnum.ABOUT
    },
];

    return (
      <>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            {links.map((link) => {
                return (
                  <>
                    <Link
                      to={link.direction}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </>
                );
            })}            

            <Link
              to="/component_test"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Tests
            </Link>
        </div>
      </>
    );
}