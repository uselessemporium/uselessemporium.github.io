/// These represent the folder entries of the blog.

import { Link } from "react-router-dom";
import { randomUUID } from "../../../utils/uuidHelpers";

export class BlogMonthEntriesModel{
    id: string = randomUUID();
    totalEntries: number = 0;
    displayName: string = "";
    target: string = "";

    constructor(){}

    withTotalEntries(totalEntries: number): this{
        this.totalEntries = totalEntries
        return this;
    }

    withDisplayName(displayName: string): this{
        this.displayName = displayName
        return this;
    }

    withTarget(target: string): this{
        this.target = target
        return this;
    }
}

export const BlogMonthEntriesComponent: React.FC<{ model: BlogMonthEntriesModel }> = ({ model }) =>{
    return (
      <>
        <li className="flex justify-between items-center bg-zinc-700 p-4 rounded-lg hover:bg-zinc-600 transition duration-200">
          <Link
            to={model.target}
            className="text-lg font-semibold text-blue-400 hover:text-blue-300"
          >
            {model.displayName}
          </Link>
          <span className="text-gray-300 text-sm bg-gray-600 px-3 py-1 rounded-full">
            {model.totalEntries} entries
          </span>
        </li>
      </>
    );
}