import { useEffect, useRef, useState } from "react";
import { BlogMonthEntriesComponent, BlogMonthEntriesModel } from "../components/structural/blogComponents/BlogMonthEntriesComponent";
import postTree from "../folderTree";


function getMonthName(num: string): string {
  const [yy, mm] = num.split("-").map(Number);

  const monthDate = new Date(2000 + yy, mm - 1, 1); // <-- here is where 0-based matters

  const monthStr = monthDate.toLocaleString("default", {
    month: "long",
  });

  return `${monthStr} ${monthDate.getFullYear()}`;
}

export const BlogRootPage: React.FC = () => {
  const [blogMonths, setBlogMonths] = useState<BlogMonthEntriesModel[]>([])
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    const blogMonths: BlogMonthEntriesModel[] = [];

    Object.keys(postTree).forEach((key) => {
      const value = postTree[key];

      const monthEntry = new BlogMonthEntriesModel()
        .withDisplayName(getMonthName(key))
        .withTarget(key)
        .withTotalEntries(Object.keys(value).length);

      blogMonths.push(monthEntry);
    });
    setBlogMonths(blogMonths);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row lg:items-start lg:space-x-8 mb-auto">
        <div className="flex-1 max-w-xl lg:max-w-none w-full text-left bg-zinc-800 p-6 rounded-xl shadow-lg mb-8 lg:mb-0">
          <h1 className="text-3xl font-extrabold text-gray-100 mb-2">
            Blog Archive
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Here are collections of thoughts and records on the progress of different projects and stuff...
          </p>
          <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {blogMonths.map((entry) => {
              return (
                <BlogMonthEntriesComponent
                  key={entry.id}
                  model={entry}
                ></BlogMonthEntriesComponent>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
