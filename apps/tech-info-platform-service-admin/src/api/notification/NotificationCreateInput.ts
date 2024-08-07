import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  isRead?: boolean | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
