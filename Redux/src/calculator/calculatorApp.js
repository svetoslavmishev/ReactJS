import { createStore } from 'redux';
import calculator from './reducers';
import { add, subtract, divide, multiply } from './actionCreators';

const store = createStore(calculator);
store.subscribe(changeHandler);

function changeHandler() {
 console.log(store.getState());
}

store.dispatch(add(5));
store.dispatch(multiply(2));
store.dispatch(divide(2));
store.dispatch(multiply(8));
store.dispatch(subtract(2));

/*
5
1
5
40
38
*/