import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  message?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
