import { ExternalLink } from "react-external-link";
import { randomUUID } from "../utils/uuidHelpers";

export class ExternalLinkModel {
  id: string = randomUUID();
  linkUrl: string = "";
  iconImage: string = "";
  title: string = "";

  constructor() {}

  withLinkUrl(linkUrl: string): this {
    this.linkUrl = linkUrl;
    return this;
  }

  withIconImage(iconImage: string): this {
    this.iconImage = iconImage;
    return this;
  }

  withTitle(title: string): this {
    this.title = title;
    return this;
  }
};

/// It need a small Image.
export const ExternalLinkComponent: React.FC<{ model: ExternalLinkModel }> = ({ model }) => {
    return (
      <>
        <ExternalLink
          href={model.linkUrl}
          className="block w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 shadow-md hover:opacity-75 transition duration-300"
          title={model.title}
        >
          <img
            src={model.iconImage}
            className="w-full h-full object-cover"
          ></img>
        </ExternalLink>
      </>
    );
};


                
