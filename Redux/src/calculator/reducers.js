import * as actionTypes from './actionTypes';

export default function calculator(oldstate = 0, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return oldstate + action.value;
    case actionTypes.SUBTRACT:
      return oldstate - action.value;
    case actionTypes.DIVIDE:
      return oldstate / action.value;
    case actionTypes.MULTIPLY:
      return oldstate * action.value;
    default: return oldstate;
  }
}