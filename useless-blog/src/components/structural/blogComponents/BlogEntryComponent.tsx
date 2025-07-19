import ReactMarkdown from "react-markdown";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

export class BlogEntryModel {
  month: string = "";
  date: string = "";
  content: string = "";

  constructor() {}

  withMonth(month: string | undefined): this {
    this.month = month ?? "";
    return this;
  }

  withDate(date: string | undefined): this {
    this.date = date ?? "";
    return this;
  }

  withContent(content: string | undefined): this {
    this.content = content ?? "";
    return this;
  }
}

export const BlogEntryComponent: React.FC<{ model: BlogEntryModel }> = ({ model }) =>{
    return (
      <>
        <div className="w-full bg-zinc-800 p-4 rounded-xl shadow-lg overflow-y-auto  mb-auto">
          <div className="prose dark:prose-invert max-w-none h-[80vh]">
            <PhotoProvider>
              <ReactMarkdown
                components={{
                  img: ({ src = "", alt }) => (
                    <PhotoView
                      src={`/posts/${model.month}/${model.date}/${src}`}
                    >
                      <img
                        src={`/posts/${model.month}/${model.date}/${src}`}
                        alt={alt}
                        className="w-40 rounded-xl shadow-md hover:shadow-xl hover:brightness-110 transition-all duration-300 cursor-pointer"
                      />
                    </PhotoView>
                  ),
                }}
              >
                {model.content}
              </ReactMarkdown>
            </PhotoProvider>
          </div>
        </div>
      </>
    );
}