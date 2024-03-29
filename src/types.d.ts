export type PostProps = {
  id: string,
  name: string;
  message: string;
  image?: string;
};

export type ContextType = {
  allPosts: PostProps[];
  addPost: (post: PostProps) => void;
};