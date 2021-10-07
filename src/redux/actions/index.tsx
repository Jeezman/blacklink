import { CREATE_BLACKLIST, GET_ALL_BLACKLIST } from "./types";

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
