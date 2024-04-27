import redux from 'redux'

const reducerFun = (state = {counter:0}, action) => {
    if(action.type === 'INCREMENT'){
        return {
           counter : state.counter+2
        }
    }else if (action.type === 'DECREMENT'){
        return {
            counter : state.counter - 2
        }
    }else {
        return state;
    }
}

const store = redux.createStore(reducerFun);

const subscriberfunction= () => {
    const latestState = store.getState(); // redux problem

}
store.subscribe(subscriberfunction);
export default store
