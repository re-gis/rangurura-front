import { User } from "@/typings";
import { UserState } from "@/typings/reduxTypes";
const initialUserState = {
  user: null,
  token: "",
};
const userReducer = (state: UserState = initialUserState, action: any) => {
  if (action.type === "setUser") {
    return (state.user = action.payload.user);
  } else if (action.type === "setToken") {
    return (state.token = action.payload.token);
  }
  return state;
};

export default userReducer;
