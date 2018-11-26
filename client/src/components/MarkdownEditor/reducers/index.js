import { ADD_TEXT, ADD_MD } from '../actions/index.js';

const defaultState = {
  text: '',
  md: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return Object.assign({}, state, { text: action.text });
    case ADD_MD:
      return Object.assign({}, state, { md: action.md });
    default:
      return state;
  }
}
