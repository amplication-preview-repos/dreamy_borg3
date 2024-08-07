import { Content } from "../content/Content";
import { Notification } from "../notification/Notification";

export type Category = {
  contents?: Array<Content>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  notifications?: Array<Notification>;
  updatedAt: Date;
};
