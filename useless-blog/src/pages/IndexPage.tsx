import { FeatureCardComponent } from "../components/cards/FeatureCardComponent";
import { LastPostCardComponent, LastPostCardModel } from "../components/cards/LastPostCard";
import { ExternalLinkComponent, ExternalLinkModel } from "../components/ExternalLinkComponent";
import postTree from "../folderTree";
import { featurePresentation } from "../infrastructure/IndexMetadata";
import { NavigationBaseRoutesEnum } from "../infrastructure/NavigationConstants";

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


  const lastPostMonth = Object.keys(postTree)[0];
  const lastPostEntry = Object.keys(postTree[lastPostMonth])[0];
  const lastPost = postTree[lastPostMonth][lastPostEntry]
  const lastPostModel = new LastPostCardModel()
    .withFeatureContent(lastPost.summary)
    .withFeatureTitle(lastPost.title)
    .withUrl(`${NavigationBaseRoutesEnum.BLOG}/${lastPostMonth}/${lastPostEntry}`);


  return (
    <>
      <div className="w-full sm:w-1/2 text-left mb-4">
        <h1 className="text-3xl font-extrabold text-gray-100 mb-6 leading-tight">
          Welcome to The Useless Emporium Site!
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-2">
          This is a dumpsterfire! :D
          <br></br>
          We have shiet to do!
        </p>
      </div>


      <div className="gap-4 mt-auto">
        <LastPostCardComponent model={lastPostModel}></LastPostCardComponent>
        <FeatureCardComponent model={featurePresentation}></FeatureCardComponent>
      </div>


      <div className="w-full flex flex-col items-start mt-4">
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