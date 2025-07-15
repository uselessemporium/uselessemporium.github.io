import { faker } from "@faker-js/faker";
import { ComicCardComponent, ComicCardModel } from "../components/structural/comicComponents/ComicCardComponent"
import { NavigationBaseRoutesEnum } from "../infrastructure/NavigationConstants";

export const ComicsPage: React.FC = () =>{

    const comicList: ComicCardModel[] = [
        new ComicCardModel()
        .withTitle("Magical Girl Noir Quest")
        .withTarget(`${NavigationBaseRoutesEnum.COMICS}/MGNQ`)
        .withDescription("The murderface experience")
        .withThumbnail("assets/AssetNotFound.jpg"),
        new ComicCardModel()
        .withTitle("Magical Girl Noir Quest")
        .withTarget(`${NavigationBaseRoutesEnum.COMICS}/MGNQ`)
        .withDescription(faker.lorem.paragraph())
        .withThumbnail("assets/AssetNotFound.jpg"),
        new ComicCardModel()
        .withTitle("Magical Girl Noir Quest")
        .withTarget(`${NavigationBaseRoutesEnum.COMICS}/MGNQ`)
        .withDescription(faker.lorem.paragraph())
        .withThumbnail("assets/AssetNotFound.jpg"),
        new ComicCardModel()
        .withTitle("Magical Girl Noir Quest")
        .withTarget(`${NavigationBaseRoutesEnum.COMICS}/MGNQ`)
        .withDescription(faker.lorem.paragraph())
        .withThumbnail("assets/AssetNotFound.jpg")
    ];

    return (
      <>
        <div className="text-left bg-zinc-800 p-6 rounded-xl shadow-lg mb-auto">
          <h1 className="text-4xl font-extrabold text-gray-100 mb-2">
            Pick your poison.
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Raw and unapologetic. Highest quality bullshiet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comicList.map((card) => {
              return <ComicCardComponent model={card}></ComicCardComponent>;
            })}
          </div>
        </div>
      </>
    );
}