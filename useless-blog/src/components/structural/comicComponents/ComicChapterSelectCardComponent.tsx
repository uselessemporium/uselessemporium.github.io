
export class ComicChapterSelectCardModel{
    thumbnail: string ="";  
    title: string = "";
    description: string = "";
    constructor() {}

    withThumbnail(thumbnail: string) : this{
        this.thumbnail = thumbnail;
        return this;
    }

    withDescription(description: string) : this{
        this.description = description;
        return this;
    }

    withTitle(title: string) : this{
        this.title = title;
        return this;
    }
}

export const ComicChapterSelectCardComponent: React.FC<{
  model: ComicChapterSelectCardModel;
}> = ({ model }) => {
  return (
    <>
      <div className="bg-zinc-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-8">
        <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={model.thumbnail}
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-100 mb-2">
            {model.title}
          </h1>
          <p className="text-base text-gray-300 leading-relaxed">
            {model.description}
          </p>
        </div>
      </div>
    </>
  );
};