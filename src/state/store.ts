import reducers from "./reducers/index"
import {legacy_createStore as createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(
    reducers,
    //devToolsEnhancer({ trace: true }),
    {},
    applyMiddleware(thunk)

);

export default store