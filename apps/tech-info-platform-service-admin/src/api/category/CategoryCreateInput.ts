import { ContentCreateNestedManyWithoutCategoriesInput } from "./ContentCreateNestedManyWithoutCategoriesInput";
import { NotificationCreateNestedManyWithoutCategoriesInput } from "./NotificationCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  contents?: ContentCreateNestedManyWithoutCategoriesInput;
  description?: string | null;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutCategoriesInput;
};
