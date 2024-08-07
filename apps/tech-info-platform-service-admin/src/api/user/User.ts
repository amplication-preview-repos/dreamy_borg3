import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notifications?: Array<Notification>;
  profileImageUrl: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userType?: "Option1" | null;
  username: string;
};
