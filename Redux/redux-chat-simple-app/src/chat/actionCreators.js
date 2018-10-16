import * as actionTypes from './actionTypes';

export function addMessage(stateValue) {
  return {
    type: actionTypes.ADD,
    message: stateValue
  };
}

export function deleteMessage(index) {
  return {
    type: actionTypes.DELETE,
    index
  };
}