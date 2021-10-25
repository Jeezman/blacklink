import { CREATE_BLACKLIST, GET_ALL_BLACKLIST, GET_USER } from "./types";

let nextId = 1;
export const createBlacklist = (blackList: any) => {
  // console.log("here");
  //console.log("blacklist ", blackList);
  return {
    type: CREATE_BLACKLIST,
    payload: {
      ...blackList,
      id: nextId++,
    },
  };
};

export const getUser = (user: any) => {
  return {
    type: GET_USER,
    payload: user,
  };
};
