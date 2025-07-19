import { Link } from "react-router-dom"
import { NavigationBaseRoutesEnum } from "../../../infrastructure/NavigationConstants";
import { randomUUID } from "../../../utils/uuidHelpers";


export const DesktopLinksComponent: React.FC = () =>{

    const links = [
      {
        id: randomUUID(),
        label: "Blog",
        direction: NavigationBaseRoutesEnum.BLOG,
      },
      {
        id: randomUUID(),
        label: "About",
        direction: NavigationBaseRoutesEnum.ABOUT,
      }
    ];

    return (
      <>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            {links.map((link) => {
                return (
                  <Link
                    key={link.id}
                    to={link.direction}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                );
            })}            
        </div>
      </>
    );
}