import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import blacklistReducer from "./blacklistReducer";

const rootReducer = combineReducers({
  list: blacklistReducer,
  loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
