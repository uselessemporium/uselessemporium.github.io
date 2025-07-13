import { Link } from "react-router-dom";
import "./FeatureCardComponent.css"

/*
The feature card will show something and then redirect to the resource.
The thumbnails must be 96x96 px.
*/

export class FeatureCardModel {
  url: string = "";
  thumbnail: string = "";
  featureTitle: string = "";
  featureContent: string = "";

  constructor() {}

  withUrl(url: string): this {
    this.url = url;
    return this;
  }

  withThumbnail(thumbnail: string): this {
    this.thumbnail = thumbnail;
    return this;
  }
  withFeatureTitle(featureTitle: string): this {
    this.featureTitle = featureTitle;
    return this;
  }

  withFeatureContent(featureContent: string): this {
    this.featureContent = featureContent;
    return this;
  }
}

export const FeatureCardComponent: React.FC<{ model: FeatureCardModel }> = ({ model }) => {
  return (
    <>
      <div className="max-w-md w-full bg-zinc-800 p-4 rounded-xl shadow-lg flex items-start space-x-4 mt-4 mb-4">
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
          <img
            src={model.thumbnail}
            className="w-full h-full object-cover"
          ></img>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-100 mb-2">
            {model.featureTitle}
          </h3>
          <p className="text-sm text-gray-300 text-fade-gradient mb-4">
            {model.featureContent}
          </p>
          <Link
            to={model.url}
            className="text-blue-600 hover:text-blue-400 text-sm font-medium self-end"
          >
            Continue Reading &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};
