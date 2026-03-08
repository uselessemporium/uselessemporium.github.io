import { ToolCardComponent, ToolCardModel } from "../components/structural/toolComponents/ToolCardComponent";
import { NavigationBaseRoutesEnum, ToolPageRoutes } from "../infrastructure/NavigationConstants";

export const ToolsRootPage: React.FC = () => {

  const comicList: ToolCardModel[] = [
    new ToolCardModel()
      .withTitle("Webtoon Planner Preview")
      .withTarget(`${NavigationBaseRoutesEnum.TOOLS}/${ToolPageRoutes.WEBTOON_PREVIEW}`)
      .withDescription("A browser tool to preview webtoons in planning phase.")
      .withThumbnail("assets/webtoonPreview/webtoonPreviewThumbnail.png"),
  ];

  return (
    <>
      <div className="text-left bg-zinc-800 p-6 rounded-xl shadow-lg mb-auto">
        <h1 className="text-4xl font-extrabold text-gray-100 mb-2">
          Some useful browser tools that we use
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          Some of it might be useful to you. We put them in here because it was easier than making an app for them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comicList.map((card) => {
            return (
              <ToolCardComponent
                key={card.id}
                model={card}
              ></ToolCardComponent>
            );
          })}
        </div>
      </div>
    </>
  );
}