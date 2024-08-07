import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  content?: ContentWhereUniqueInput;
  id?: StringFilter;
  parentComment?: StringNullableFilter;
  text?: StringNullableFilter;
};
