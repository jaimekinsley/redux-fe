import { SET_CONTACTS, SET_COMMUNICATIONS } from '../actions/crmActions';

export const initialState = [];

export default function reducer(state, action) {
  switch(action.type) {
    case SET_CONTACTS:
      return action.payload;

    case SET_COMMUNICATIONS:
      return action.payload;

    default:
      return state;
  }
}
