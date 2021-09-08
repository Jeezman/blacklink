import { CREATE_BLACKLIST } from "./types";

export const createBlacklist = (blackList:any) => ({
    type: CREATE_BLACKLIST,
    data: blackList,
})