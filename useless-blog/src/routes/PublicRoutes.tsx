import { Route } from "react-router-dom";
import { IndexPage } from "../pages/IndexPage";
import { NavigationBaseRoutesEnum } from "../infrastructure/NavigationConstants";
import { ComponentTestPage } from "../pages/ComponentTestPage";
import { BlogRootPage } from "../pages/BlogRootPage";
import { BlogMonthPage } from "../pages/BlogMonth/BlogMonthPage";
import { ComicsPage } from "../pages/ComicsPage";
import { ComicChapterSelectPage } from "../pages/ComicChapterSelect/ComicChapterSelectPage";
import { AboutPage } from "../pages/AboutPage";

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
  ></Route>,
  <Route
    path={NavigationBaseRoutesEnum.COMICS}
    element={<ComicsPage></ComicsPage>}
  ></Route>,
  <Route
    path={`${NavigationBaseRoutesEnum.COMICS}/:comic`}
    element={<ComicChapterSelectPage></ComicChapterSelectPage>}
  ></Route>,
  <Route
    path={NavigationBaseRoutesEnum.COMPONENT_TEST}
    element={<ComponentTestPage></ComponentTestPage>}
  ></Route>,
    <Route
    path={NavigationBaseRoutesEnum.ABOUT}
    element={<AboutPage></AboutPage>}
  ></Route>,

];