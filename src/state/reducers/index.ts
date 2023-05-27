import { combineReducers } from 'redux'
import bankReducer from "./bankReducer"

const reducers = combineReducers({
    bank:bankReducer
});

export default reducers

//jo bhi state hoga reducer uski value State mei hogi
export type State = ReturnType<typeof reducers>


//export{}