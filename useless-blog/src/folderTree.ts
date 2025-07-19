import data from "./folderTree.json";

export type PostMetadata = {
  title: string;
  summary: string;
};

export type PostTree = {
  [month: string]: {
    [postId: string]: PostMetadata;
  };
};

const postTree: PostTree = data;
export default postTree;