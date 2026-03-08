import { NavBarComponent } from "./components/structural/navBarComponents/NavBarComponent";
import { BodyContainerComponent } from "./components/structural/BodyContainerComponent";
import { Routes } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";
import { ErrorRoutes } from "./routes/ErrorRoutes";
import { ThemeProvider } from "./context/DarkThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBarComponent></NavBarComponent>
        <BodyContainerComponent>
          <Routes>
            {PublicRoutes}
            {ErrorRoutes}
          </Routes>
        </BodyContainerComponent>
      </ThemeProvider>
    </>
  );
}

export default App;
