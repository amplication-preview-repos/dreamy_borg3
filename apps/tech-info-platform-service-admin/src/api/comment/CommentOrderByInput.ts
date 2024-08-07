import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  contentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  parentComment?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
