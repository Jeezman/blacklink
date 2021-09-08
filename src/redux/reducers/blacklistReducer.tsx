import {CREATE_BLACKLIST} from "../actions/types";

const initialState = {
    blackList:[],
}

const blacklistReducer = (state = initialState, action:any) => {
    switch(action.type){
        case CREATE_BLACKLIST:
            return{
             ...state,
            blackList: action.blackList
            };
        default:
            return state;
    }
}

export default blacklistReducer;