import { faker } from "@faker-js/faker";
import { FeatureCardComponent } from "../components/cards/FeatureCardComponent";
import { ExternalLinkComponent, ExternalLinkModel } from "../components/ExternalLinkComponent";
import { featurePresentation } from "../infrastructure/IndexMetadata";

export const IndexPage: React.FC = () => {

// Ill include the links later.
const externalLinks: ExternalLinkModel[] = [
  new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://www.youtube.com/@uselessemporium")
    .withTitle("YouTube"),
  new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://x.com/UselessEmporium")
    .withTitle("X/Tweeter"),
  new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://www.tiktok.com/@uselessemporium")
    .withTitle("TikTok"),
  new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://www.instagram.com/uselessemporium")
    .withTitle("Instagram"),
  new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://buymeacoffee.com/uselessemporium")
    .withTitle("Coffee"),
];

  return (
    <>
      <div className="w-full sm:w-1/2 text-left mb-4">
        <h1 className="text-3xl font-extrabold text-gray-100 mb-6 leading-tight">
          Welcome to Our Awesome Site!
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-2">
          {faker.lorem.paragraph()}
          <br></br>
          <br></br>
          {faker.lorem.paragraph()}
        </p>
      </div>

      <FeatureCardComponent model={featurePresentation}></FeatureCardComponent>

      <div className="w-full flex flex-col items-start mt-auto">
        <h2 className="text-1xl font-bold text-gray-200 mb-2">Our Socials</h2>
        <div className="flex space-x-6">
          {externalLinks.map((link) => {
            return (
              <ExternalLinkComponent
                key={link.id}
                model={link}
              ></ExternalLinkComponent>
            );
          })}
        </div>
      </div>
    </>
  );
};