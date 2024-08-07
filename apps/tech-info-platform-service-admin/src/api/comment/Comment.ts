import { Content } from "../content/Content";

export type Comment = {
  author: string | null;
  content?: Content | null;
  createdAt: Date;
  id: string;
  parentComment: string | null;
  text: string | null;
  updatedAt: Date;
};
