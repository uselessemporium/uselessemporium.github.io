import { Link } from "react-router-dom";

export class LastPostCardModel {
    url: string = "";
    featureTitle: string = "";
    featureContent: string = "";

    constructor() { }

    withUrl(url: string): this {
        this.url = url;
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
export const LastPostCardComponent: React.FC<{ model: LastPostCardModel }> = ({ model }) => {
    return (
        <div className="relative max-w-md w-full bg-zinc-800 p-4 rounded-xl shadow-lg flex items-start space-x-4 mt-4 mb-4">

            <span className="absolute top-3 right-4 text-xs text-gray-400">
                Last Blog Entry
            </span>

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
    );
};