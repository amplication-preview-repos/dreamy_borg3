import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContentWhereInput = {
  author?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  mediaType?: "Option1";
  mediaUrl?: StringNullableFilter;
  title?: StringNullableFilter;
};
