export const IndexPage: React.FC = () => {

// Ill include the links later.

//   const youtubeLink = new ExternalLinkModel()
//   .withIconImage("assets/AssetNotFound.jpg")
//   .withLinkUrl("https://www.youtube.com/@uselessemporium")
//   .withTitle("YouTube");

//   const xLink = new ExternalLinkModel()
//   .withIconImage("assets/AssetNotFound.jpg")
//   .withLinkUrl("https://x.com/UselessEmporium")
//   .withTitle("X/Tweeter");

//   const tiktokLink = new ExternalLinkModel()
//   .withIconImage("assets/AssetNotFound.jpg")
//   .withLinkUrl("https://www.tiktok.com/@uselessemporium")
//   .withTitle("TikTok");

//   const instagramLink = new ExternalLinkModel()
//   .withIconImage("assets/AssetNotFound.jpg")
//   .withLinkUrl("https://www.tiktok.com/@uselessemporium")
//   .withTitle("Instagram");
  
//   const coffeLink = new ExternalLinkModel()
//   .withIconImage("assets/AssetNotFound.jpg")
//   .withLinkUrl("https://buymeacoffee.com/uselessemporium")
//   .withTitle("Coffee");


  return (
    <>
      <main className="flex-grow p-8 flex flex-col justify-between items-start">
        <div className="w-1/3 text-left mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
            Welcome to Our Awesome Site!
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We're thrilled to have you here. Explore a world of comics, engaging
            blogs, captivating videos, and learn more about us. Our goal is to
            provide you with the best content experience. Dive in and discover
            something new!
          </p>
        </div>

        <div className="w-full flex flex-col items-start mt-6">
          <h2 className="text-1xl font-bold text-gray-800 mb-4">Our Socials</h2>
          <div className="flex space-x-6">
            <a
              href="#"
              className="block w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 shadow-md hover:opacity-75 transition duration-300"
              title="Facebook"
            >
              <img
                src="https://placehold.co/48x48/0000FF/FFFFFF?text=FB"
                alt="Facebook Icon"
                className="w-full h-full object-cover"
              ></img>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};