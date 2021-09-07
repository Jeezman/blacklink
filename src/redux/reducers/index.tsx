import { combineReducers } from 'redux';
export type RootState = ReturnType<typeof rootReducer>
import blacklistReducer from './blacklistReducer';


const rootReducer = combineReducers({

        blackList: blacklistReducer,
        
})

export default rootReducer