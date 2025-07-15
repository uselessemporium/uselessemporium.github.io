import { Link } from "react-router-dom";
import { randomUUID } from "../../../utils/uuidHelpers";

const getTimeAgo = (from: Date): string => {
  const today = new Date();
  const years = today.getFullYear() - from.getFullYear();
  const months = today.getMonth() - from.getMonth();

  const totalMonths = years * 12 + months;
  const diffTime = today.getTime() - from.getTime();
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (totalMonths > 0)
    return `${totalMonths} month${totalMonths > 1 ? "s" : ""} ago`;
  if (totalDays > 0) return `${totalDays} day${totalDays > 1 ? "s" : ""} ago`;
  return "today";
};

export class ComicChapterSelectorModel{
    id: string = randomUUID();
    target: string = "";
    title: string = "";
    publishedAt: Date = new Date();

    constructor(){}

    withTitle(title: string): this{
        this.title = title
        return this;
    }

    withTarget(target: string): this{
        this.target = target;
        return this;
    }

    withPublishedAt(publishedAt: Date): this{
        this.publishedAt = publishedAt;
        return this;
    }
}

export const ComicChapterSelectorComponent: React.FC<{model: ComicChapterSelectorModel}> = ({model}) => {
return (
  <>
    <li className="flex justify-between items-center bg-zinc-700 p-3 rounded-lg hover:bg-zinc-600 transition duration-200">
      <Link
        to={model.target}
        className="text-lg font-semibold text-blue-400 hover:text-blue-300"
      >
        {model.title}
      </Link>
      <span className="text-gray-400 text-sm"> {getTimeAgo(model.publishedAt)}</span>
    </li>
  </>
);
} 