import { combineReducers } from 'redux';


import blacklistReducer from './blacklistReducer';


const rootReducer = combineReducers({

        list: blacklistReducer,

})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer