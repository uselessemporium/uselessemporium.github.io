import { NavBarComponent } from "./components/structural/NavBarComponent";
import { BodyContainerComponent } from "./components/structural/BodyContainerComponent";
import { Routes } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <NavBarComponent></NavBarComponent>
        <BodyContainerComponent>
          <Routes>{PublicRoutes}</Routes>
        </BodyContainerComponent>
      </div>
    </>
  );
}

export default App;
