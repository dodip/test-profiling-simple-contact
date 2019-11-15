import axios from 'axios';
import {
  GET_CONTACT_LIST,  GET_CONTACT_LIST_FULFILLED,
  GET_CONTACT_LIST_REJECTED,  GET_CONTACT,
  GET_CONTACT_FULFILLED,  GET_CONTACT_REJECTED,
  UPDATE_CONTACT,  UPDATE_CONTACT_FULFILLED,
  UPDATE_CONTACT_REJECTED, DELETE_CONTACT,
  DELETE_CONTACT_FULFILLED, DELETE_CONTACT_REJECTED,
  ADD_CONTACT, ADD_CONTACT_FULFILLED,
  ADD_CONTACT_REJECTED,
} from './types';
import {ToastAndroid} from 'react-native';

const BASE_URL = 'https://simple-contact-crud.herokuapp.com/contact';

export const fetchData = (bool) => {
  return {
    type: GET_CONTACT_LIST,
    payload: bool,
  };
};

export const fetchDataFulfilled = (data) => {
  return {
    type: GET_CONTACT_LIST_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const fetchDataRejected = (error) => {
  ToastAndroid.show('Opps.. something went wrong', ToastAndroid.LONG);
  return {
    type: GET_CONTACT_LIST_REJECTED,
    payload: error,
    loading: false,
  };
};

export const getContactList = () => {
  return dispatch => {
    dispatch(fetchData(true));
    axios.get(BASE_URL).then(res => {
        dispatch(fetchDataFulfilled(res.data.data));
    }).catch(err => dispatch(fetchDataRejected(err)));
  }
};


export const addData = (bool) => {
  return {
    type: ADD_CONTACT,
    payload: bool,
  };
};

export const addDataFulfilled = (data) => {
  ToastAndroid.show('Contact saved', ToastAndroid.LONG);
  return {
    type: ADD_CONTACT_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const addDataRejected = (error) => {
  ToastAndroid.show('Opps.. something went wrong', ToastAndroid.LONG);
  return {
    type: ADD_CONTACT_REJECTED,
    payload: error,
    loading: false,
  };
};

export const addContact = (params) => {
  return dispatch => {
    dispatch(addData(true));
    axios.post(BASE_URL, params).then(res => {
        dispatch(addDataFulfilled(res.message));
     }).catch(err => dispatch(addDataRejected(err)));
  }
};

export const getData = (bool) => {
  return {
    type: ADD_CONTACT,
    payload: bool,
  };
};

export const getDataFulfilled = (data) => {
  return {
    type: GET_CONTACT_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const getDataRejected = (error) => {
  ToastAndroid.show('Opps.. something went wrong', ToastAndroid.LONG);
  return {
    type: GET_CONTACT_REJECTED,
    payload: error,
    loading: false,
  };
};

export const getContact = (params) => {
  return dispatch => {
    dispatch(getData(true));
    axios.get(BASE_URL+'/'+params).then(res => {
        dispatch(getDataFulfilled(res.data.data));
     }).catch(err => dispatch(getDataRejected(err)));
  }
};