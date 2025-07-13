import { NavBarComponent } from "./components/structural/navBarComponents/NavBarComponent";
import { BodyContainerComponent } from "./components/structural/BodyContainerComponent";
import { Routes } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";

function App() {
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <BodyContainerComponent>
        <Routes>{PublicRoutes}</Routes>
      </BodyContainerComponent>
    </>
  );
}

export default App;
