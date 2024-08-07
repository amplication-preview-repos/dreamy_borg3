import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  author?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  mediaType?: SortOrder;
  mediaUrl?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
