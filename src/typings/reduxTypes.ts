import { User } from ".";

export type UserState = {
  user: User | null | undefined;
  token: string | null;
};
