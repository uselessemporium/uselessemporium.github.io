import { ExternalLinkComponent, ExternalLinkModel } from "../components/ExternalLinkComponent";

// We use this component to test whatever we need to create.
export const ComponentTestPage: React.FC = () => {
  const linkComponent = new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://www.google.com")
    .withTitle("Some target");

  return <ExternalLinkComponent model={linkComponent}></ExternalLinkComponent>;
};