import * as actionTypes from './actionTypes';

export default function chat(state, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        messages: state.messages.concat(action.message)
      }
    case actionTypes.DELETE:
      return {
        messages: [...state.messages.slice(0, action.index),
        ...state.messages.slice(action.index + 1, state.messages.length)]
      }
    default: return state;
  }
}