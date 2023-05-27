import ActionType from "./action-types"
import store from "./store"

export * as actionCreaters from "./action-creators"
export * from "./store"
export * from "./reducers/index"

const unsubscribe = store.subscribe(()=>{
    console.log("Updated bank balance",store.getState());
})

store.dispatch({
    type:ActionType.DEPOSIT,
    payload:500
})

//unsubscribe();
console.log(store.getState());