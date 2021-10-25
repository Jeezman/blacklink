import { GET_USER } from "../actions/types";

const initialState = {
  users: [],
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER:
      //console.log(action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

export default loginReducer;
