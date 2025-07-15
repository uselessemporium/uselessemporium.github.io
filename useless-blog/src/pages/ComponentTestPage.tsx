import { BlogEntryModel,BlogEntryComponent } from "../components/structural/blogComponents/BlogEntryComponent";

// const testContent1 = `# This is the main title

// This is what follows.

// \`\`\`commandline
// This is code fragment
// \`\`\`

// ## This is a subtitle

// And here we discuss Enlyn Stuff.
// `

const testContent2 = `# My Blog\nSome *italic* text.`;

// We use this component to test whatever we need to create.
export const ComponentTestPage: React.FC = () => {
  const blogModel = new BlogEntryModel().withContent(testContent2);

  return <BlogEntryComponent model={blogModel}></BlogEntryComponent>;
};