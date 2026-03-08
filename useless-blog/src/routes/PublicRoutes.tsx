import { Route } from "react-router-dom";
import { NavigationBaseRoutesEnum, ToolPageRoutes } from "../infrastructure/NavigationConstants";
import { AboutPage } from "../pages/AboutPage";
import { BlogEntryPage } from "../pages/BlogMonth/BlogEntryPage";
import { BlogMonthPage } from "../pages/BlogMonth/BlogMonthPage";
import { BlogRootPage } from "../pages/BlogRootPage";
import { ComponentTestPage } from "../pages/ComponentTestPage";
import { IndexPage } from "../pages/IndexPage";
import { WebtoonPreviewToolPage } from "../pages/ToolPages/WebtoonPreviewToolPage";
import { ToolsRootPage } from "../pages/ToolsRootPage";

// These are the Routes of the public part of the application.
export const PublicRoutes = [
  <Route
    path={NavigationBaseRoutesEnum.INDEX}
    element={<IndexPage></IndexPage>}
  ></Route>,
  <Route
    path={NavigationBaseRoutesEnum.BLOG}
    element={<BlogRootPage></BlogRootPage>}
  ></Route>,
  <Route
    path={`${NavigationBaseRoutesEnum.BLOG}/:month`}
    element={<BlogMonthPage></BlogMonthPage>}
  >
  </Route>,
  <Route
    path={`${NavigationBaseRoutesEnum.BLOG}/:month/:date`}
    element={<BlogEntryPage></BlogEntryPage>}
  >
  </Route>,
  <Route
    path={`${NavigationBaseRoutesEnum.TOOLS}`}
    element={<ToolsRootPage></ToolsRootPage>}
  >
  </Route>,
  <Route
    path={`${NavigationBaseRoutesEnum.TOOLS}/${ToolPageRoutes.WEBTOON_PREVIEW}`}
    element={<WebtoonPreviewToolPage></WebtoonPreviewToolPage>}
  >
  </Route>,
  <Route
    path={NavigationBaseRoutesEnum.COMPONENT_TEST}
    element={<ComponentTestPage></ComponentTestPage>}
  ></Route>,
  <Route
    path={NavigationBaseRoutesEnum.ABOUT}
    element={<AboutPage></AboutPage>}
  ></Route>,
];