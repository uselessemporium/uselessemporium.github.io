import ReactMarkdown from "react-markdown";


export class BlogEntryModel{
    content: string = "";

    constructor(){}

    withContent(content: string): this{
        this.content = content
        return this;
    }
}

export const BlogEntryComponent: React.FC<{ model: BlogEntryModel }> = ({ model }) =>{
    return (
      <>
        <div className="w-full bg-zinc-800 p-4 rounded-xl shadow-lg overflow-y-auto  mb-auto">
          <div className="prose dark:prose-invert max-w-none h-[80vh]">
            <ReactMarkdown>{model.content}</ReactMarkdown>
          </div>
        </div>
      </>
    );
}