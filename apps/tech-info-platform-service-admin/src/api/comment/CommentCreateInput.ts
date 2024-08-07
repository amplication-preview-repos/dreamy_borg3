import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  content?: ContentWhereUniqueInput | null;
  parentComment?: string | null;
  text?: string | null;
};
