import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  isRead?: boolean | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
