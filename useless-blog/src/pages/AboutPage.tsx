import { ExternalLinkComponent, ExternalLinkModel } from "../components/ExternalLinkComponent";

export const AboutPage: React.FC = () => {

// Ill include the links later.
const externalLinks: ExternalLinkModel[] = [
  new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://www.youtube.com/@uselessemporium")
    .withTitle("YouTube"),
  new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://x.com/UselessEmporium")
    .withTitle("X/Tweeter"),
  new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://www.tiktok.com/@uselessemporium")
    .withTitle("TikTok"),
  new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://www.tiktok.com/@uselessemporium")
    .withTitle("Instagram"),
  new ExternalLinkModel()
    .withIconImage("assets/AssetNotFound.jpg")
    .withLinkUrl("https://buymeacoffee.com/uselessemporium")
    .withTitle("Coffee"),
];


  return (
    <>
      <div className="w-full sm:w-1/2 text-left mb-4">
        <h1 className="text-3xl font-extrabold text-gray-100 mb-6 leading-tight">
          We are the Useless emporium!
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          We might not be singular person, we are just shitposters and maniacs
          dedicated to their craft screaming into the digital void.
          <br></br>
          We really hope you enjoy our shiet. 'Cause I for sure do enjoy making
          it. If you have any suggestions for the show or some ideas that you
          want me to explore, contact us.
          <br></br>
          <br></br>
          I don't promise shiet. We Might not even answer, working like
          a monkey and maintaining this is hard!
        </p>

        <a
          href="mailto:therottenlungs@gmail.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contact Us
        </a>
      </div>

      <div className="w-full flex flex-col items-start mt-auto">
        <h2 className="text-1xl font-bold text-gray-200 mb-2">Our Socials</h2>
        <div className="flex space-x-6">
          {externalLinks.map((link) => {
            return (
              <ExternalLinkComponent
                key={link.id}
                model={link}
              ></ExternalLinkComponent>
            );
          })}
        </div>
      </div>
    </>
  );
};