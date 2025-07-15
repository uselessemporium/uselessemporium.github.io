import { Link } from "react-router-dom";
import { randomUUID } from "../../../utils/uuidHelpers";

export class ComicCardModel {
  id: string = randomUUID();
  target: string = "/";
  thumbnail: string = "";
  description: string = "";
  title: string = "";

  constructor() {}

  withTarget(target: string): this {
    this.target = target;
    return this;
  }

  withThumbnail(thumbnail: string): this {
    this.thumbnail = thumbnail;
    return this;
  }

  withDescription(description: string): this {
    this.description = description;
    return this;
  }

  withTitle(title: string): this {
    this.title = title;
    return this;
  }
}

export const ComicCardComponent: React.FC<{ model: ComicCardModel }> = ({ model }) =>{

return (
  <>
    <div className="bg-zinc-700 p-4 rounded-xl shadow-md flex items-start space-x-4">
      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
        <img src={model.thumbnail} className="w-full h-full object-cover"></img>
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-100 mb-1">
          {model.title}
        </h3>
        <p className="text-sm text-gray-300 mb-3">{model.description}</p>
        <Link
          to={model.target}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium self-end"
        >
          Continue &rarr;
        </Link>
      </div>
    </div>
  </>
);

}