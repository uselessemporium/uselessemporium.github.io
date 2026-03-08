import { FeatureCardModel } from "../components/cards/FeatureCardComponent";
import { NavigationBaseRoutesEnum, ToolPageRoutes } from "./NavigationConstants";


/// This is where we keep the data that will be displayed site wise. 
export const featurePresentation = new FeatureCardModel()
    .withFeatureTitle("Webtoon Planner Preview")
    .withUrl(`${NavigationBaseRoutesEnum.TOOLS}/${ToolPageRoutes.WEBTOON_PREVIEW}`)
    .withFeatureContent("A browser tool to preview webtoons in planning phase.")
    .withThumbnail("assets/webtoonPreview/webtoonPreviewThumbnail.png")
