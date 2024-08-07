import { ContentUpdateManyWithoutCategoriesInput } from "./ContentUpdateManyWithoutCategoriesInput";
import { NotificationUpdateManyWithoutCategoriesInput } from "./NotificationUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  contents?: ContentUpdateManyWithoutCategoriesInput;
  description?: string | null;
  name?: string | null;
  notifications?: NotificationUpdateManyWithoutCategoriesInput;
};
