import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutContentsInput } from "./CommentCreateNestedManyWithoutContentsInput";

export type ContentCreateInput = {
  author?: string | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutContentsInput;
  description?: string | null;
  mediaType?: "Option1" | null;
  mediaUrl?: string | null;
  title?: string | null;
};
