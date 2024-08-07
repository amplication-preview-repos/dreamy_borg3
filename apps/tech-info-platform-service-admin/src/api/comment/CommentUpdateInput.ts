import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  content?: ContentWhereUniqueInput | null;
  parentComment?: string | null;
  text?: string | null;
};
