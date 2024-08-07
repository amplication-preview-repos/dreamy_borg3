import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";

export type Content = {
  author: string | null;
  category?: Category | null;
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  id: string;
  mediaType?: "Option1" | null;
  mediaUrl: string | null;
  title: string | null;
  updatedAt: Date;
};
