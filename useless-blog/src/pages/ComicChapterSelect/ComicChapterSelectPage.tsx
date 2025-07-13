// import { useParams } from "react-router-dom";
import { ComicChapterSelectCardComponent, ComicChapterSelectCardModel } from "../../components/structural/comicComponents/ComicChapterSelectCardComponent";
import { ComicChapterSelectorComponent, ComicChapterSelectorModel } from "../../components/structural/comicComponents/ComitChapterSelectorComponent";


export const ComicChapterSelectPage: React.FC = () => {
    // const { comicTitle } = useParams();

    const comicChapterSelectCard: ComicChapterSelectCardModel = new ComicChapterSelectCardModel()
    .withDescription("This a big test for tha chapter selector...")
    .withThumbnail("/assets/AssetNotFound.jpg")
    .withTitle("Magical Girl Noir Quest")
    ;

    const chapterSelection: ComicChapterSelectorModel[] =[
        new ComicChapterSelectorModel().withPublishedAt(new Date(1990,4,25)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,25)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,30)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,6,9)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,30)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,6,9)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,30)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,6,9)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,30)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,6,9)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,30)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,6,9)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,30)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,6,9)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,30)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,6,9)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,30)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,6,9)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,30)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,6,9)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,4,30)).withTarget("/").withTitle("Extras"),
        new ComicChapterSelectorModel().withPublishedAt(new Date(2025,6,9)).withTarget("/").withTitle("Extras"),
    ];

    return (
      <>
        <main className="flex-grow p-4 flex flex-col items-center">
          <div className="max-w-3xl w-full text-left">
            <ComicChapterSelectCardComponent
              model={comicChapterSelectCard}
            ></ComicChapterSelectCardComponent>
            <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-100 mb-4">
                Chapters
              </h2>
              <ul className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {chapterSelection.map((element) => {
                  return (
                    <ComicChapterSelectorComponent
                      model={element}
                    ></ComicChapterSelectorComponent>
                  );
                })}
              </ul>
            </div>
          </div>
        </main>
      </>
    );
}