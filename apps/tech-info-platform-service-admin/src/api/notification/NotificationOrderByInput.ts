import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
