import {
  GET_CONTACT_LIST,  GET_CONTACT_LIST_FULFILLED,
  GET_CONTACT_LIST_REJECTED,  GET_CONTACT,
  GET_CONTACT_FULFILLED,  GET_CONTACT_REJECTED,
  UPDATE_CONTACT,  UPDATE_CONTACT_FULFILLED,
  UPDATE_CONTACT_REJECTED, DELETE_CONTACT,
  DELETE_CONTACT_FULFILLED, DELETE_CONTACT_REJECTED,
  ADD_CONTACT, ADD_CONTACT_FULFILLED,
  ADD_CONTACT_REJECTED,
} from '../action/types';

const initialState = {
  contacts: [],
  loading: true,
  errorMessage: null,
  successMessage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT_LIST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_CONTACT_LIST_FULFILLED:
      return {
        ...state,
        contacts: action.payload,
        loading: action.loading,
      };
    case GET_CONTACT_LIST_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    case ADD_CONTACT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CONTACT_FULFILLED:
      return {
        ...state,
        successMessage: action.payload,
        loading: action.loading,
      };
    case ADD_CONTACT_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    case GET_CONTACT:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_CONTACT_FULFILLED:
      return {
        ...state,
        contact: action.payload,
        loading: action.loading,
      };
    case GET_CONTACT_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default reducer;
