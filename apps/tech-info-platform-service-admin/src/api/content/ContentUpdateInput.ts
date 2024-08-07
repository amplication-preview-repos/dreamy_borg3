import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutContentsInput } from "./CommentUpdateManyWithoutContentsInput";

export type ContentUpdateInput = {
  author?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutContentsInput;
  description?: string | null;
  mediaType?: "Option1" | null;
  mediaUrl?: string | null;
  title?: string | null;
};
