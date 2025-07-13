import { Route } from "react-router-dom";
import { IndexPage } from "../pages/IndexPage";
import { NavigationBaseRoutesEnum } from "../infrastructure/NavigationConstants";
import { ComponentTestPage } from "../pages/ComponentTestPage";

// These are the Routes of the public part of the application.
export const PublicRoutes = [
  <Route
    path={NavigationBaseRoutesEnum.INDEX}
    element={<IndexPage></IndexPage>}
  ></Route>,
  <Route
    path={NavigationBaseRoutesEnum.COMPONENT_TEST}
    element={<ComponentTestPage></ComponentTestPage>}
  ></Route>,
];