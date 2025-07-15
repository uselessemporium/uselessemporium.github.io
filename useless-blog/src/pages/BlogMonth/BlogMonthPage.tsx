import { useParams } from "react-router-dom";
import { BlogListEntryComponent, BlogListEntryModel } from "../../components/structural/blogComponents/BlogListEntryComponent";
import { faker } from "@faker-js/faker";

export const BlogMonthPage: React.FC = () => {
    const { month } = useParams();

    const monthTargets: BlogListEntryModel[] = [
      new BlogListEntryModel()
        .withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blog/25-07/25-07-12"),
      new BlogListEntryModel()
        .withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blog/25-07/25-07-12"),
      new BlogListEntryModel()
        .withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blog/25-07/25-07-12"),
      new BlogListEntryModel()
        .withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blog/25-07/25-07-12"),
      new BlogListEntryModel()
        .withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blog/25-07/25-07-12"),
      new BlogListEntryModel()
        .withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blog/25-07/25-07-12"),
      new BlogListEntryModel()
        .withDisplayName("7-13 -- The coffee spill")
        .withSummary(faker.lorem.paragraph())
        .withTarget("/blog/25-07/25-07-12"),
    ];

    return (
      <>
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:space-x-8">
          <div className="flex-1 max-w-xl lg:max-w-none w-full text-left bg-zinc-800 p-6 rounded-xl shadow-lg mb-8 lg:mb-0">
            <h1 className="text-3xl font-extrabold text-gray-100 mb-2">
              Entries of {month}
            </h1>
            <p className="text-sm text-gray-400 mb-6">
              {faker.lorem.paragraph()}
            </p>
            <ul className="space-y-4 h-full overflow-y-auto pr-2">
              {monthTargets.map((item) => {
                return (
                  <BlogListEntryComponent
                    key={item.id}
                    model={item}
                  ></BlogListEntryComponent>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
};
