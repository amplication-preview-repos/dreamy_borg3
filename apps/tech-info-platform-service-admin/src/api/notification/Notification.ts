import { Category } from "../category/Category";
import { User } from "../user/User";

export type Notification = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  isRead: boolean | null;
  message: string | null;
  updatedAt: Date;
  user?: User | null;
};
