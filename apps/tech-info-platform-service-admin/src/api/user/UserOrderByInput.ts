import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  profileImageUrl?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  userType?: SortOrder;
  username?: SortOrder;
};
