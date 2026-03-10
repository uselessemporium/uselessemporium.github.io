/// These represent the folder entries of the blog.

import { Link } from "react-router-dom";
import { randomUUID } from "../../../utils/uuidHelpers";

export class BlogListEntryModel {
  id: string = randomUUID();
  displayName: string = "";
  target: string = "";
  summary: string = "";

  constructor() { }

  withDisplayName(displayName: string): this {
    this.displayName = displayName
    return this;
  }

  withTarget(target: string): this {
    this.target = target
    return this;
  }

  withSummary(summary: string): this {
    this.summary = summary
    return this;
  }
}

export const BlogListEntryComponent: React.FC<{ model: BlogListEntryModel }> = ({ model }) => {
  const day = model.target.split("-")[2];

  return (
    <li className="bg-zinc-700 p-4 rounded-lg hover:bg-zinc-600 transition duration-200">
      <div className="flex gap-4">
        <div className="text-2xl font-bold text-blue-400 w-8 text-center">
          {day}
        </div>

        <div className="flex-1">
          <Link
            to={model.target}
            className="text-lg font-semibold text-blue-400 hover:text-blue-300 block mb-2"
          >
            {model.displayName}
          </Link>

          <p className="text-sm text-gray-300">
            {model.summary}
          </p>
        </div>
      </div>
    </li>
  );
}
