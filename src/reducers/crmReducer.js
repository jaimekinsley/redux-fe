import { SET_CONTACTS, SET_COMMUNICATIONS, SET_CONTACTS_LOADING, SET_COMMUNICATIONS_LOADING, SET_NEW_CONTACT } from '../actions/crmActions';

export const initialState = {
  loading: false,
  contacts: [],
  communications: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.payload };

    case SET_NEW_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case SET_CONTACTS_LOADING:
      return { ...state, loading: true };

    case SET_COMMUNICATIONS:
      return { ...state, communications: action.payload };

    case SET_COMMUNICATIONS_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
}
