import { CREATE_BLACKLIST, GET_ALL_BLACKLIST } from "../actions/types";

const initialState = {
  blackList: [],
};

const blacklistReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_BLACKLIST:
      console.log(action.payload);
      return {
        ...state,
        blackList: [...state.blackList, action.payload],
      };

    default:
      return state;
  }
};

export default blacklistReducer;
