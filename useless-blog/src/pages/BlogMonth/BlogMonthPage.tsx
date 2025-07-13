import { useParams } from "react-router-dom";
import { BlogListEntryComponent, BlogListEntryModel } from "../../components/structural/blogComponents/BlogListEntryComponent";
import { faker } from "@faker-js/faker";

export const BlogMonthPage: React.FC = () => {
    const { month } = useParams();

    const monthTargets: BlogListEntryModel[] = [
        new BlogListEntryModel().withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blogs/25-07/25-07-12"),
        new BlogListEntryModel().withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blogs/25-07/25-07-12"),
        new BlogListEntryModel().withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blogs/25-07/25-07-12"),
        new BlogListEntryModel().withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blogs/25-07/25-07-12"),
        new BlogListEntryModel().withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blogs/25-07/25-07-12"),
    ];

    return (
      <>
        <main className="flex-grow md:p-4 flex flex-col items-start">
          <div className="w-full flex flex-col lg:flex-row lg:items-start lg:space-x-8">
            <div className="flex-1 max-w-xl lg:max-w-none w-full text-left bg-zinc-800 p-6 rounded-xl shadow-lg mb-8 lg:mb-0">
              <h1 className="text-3xl font-extrabold text-gray-100 mb-2">
                Entries of {month}
              </h1>
              <p className="text-sm text-gray-400 mb-6">
                {faker.lorem.paragraph()}
              </p>
              <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {monthTargets.map((item) => {
                  return (
                    <BlogListEntryComponent
                      model={item}
                    ></BlogListEntryComponent>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col space-y-8">
            <div className="bg-zinc-800 p-6 rounded-xl shadow-lg flex flex-col items-center">
              <h2 className="text-xl font-bold text-gray-100 mr-auto mb-4">
                Search Blogs
              </h2>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left"
                ></input>
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </main>
      </>
    );
};
