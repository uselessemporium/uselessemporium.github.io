import { Route } from "react-router-dom";
import { NavigationBaseRoutesEnum } from "../infrastructure/NavigationConstants";
import { NotFoundPage } from "../pages/NotFoundPage";

export const ErrorRoutes = [
  <Route
    path={NavigationBaseRoutesEnum.ANY}
    element={<NotFoundPage></NotFoundPage>}
  ></Route>,
  <Route
    path={NavigationBaseRoutesEnum.NOT_FOUND}
    element={<NotFoundPage></NotFoundPage>}
  ></Route>,
];