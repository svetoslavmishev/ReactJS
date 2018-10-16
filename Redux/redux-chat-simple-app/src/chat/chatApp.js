import reducer from './reducers';

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(li => li());
  };

  const subscribe = listener => listeners.push(listener);

  return {
    getState,
    dispatch,
    subscribe
  };
}

const initialState = { messages: [] };

//Initialize the store
const store = createStore(reducer, initialState);

export default store;