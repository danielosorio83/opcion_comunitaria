import axios from 'axios'

import { CENTRO_APOYO_API_URL, API_KEY } from '../constants';
import { FETCH_LUPS, CREATE_LUP, FIND_LUP, DESTROY_LUP, ERROR_LUP } from '../constants';

export function fetchLups(){
  const request = axios.get(`${CENTRO_APOYO_API_URL}/lups.php?uid=0&todo=0&leng=es`);
  console.log('fetchLups.request', request);

  return {
    type: FETCH_LUPS,
    payload: request
  }
}

export function findLup(id){
  let request = axios.get(`${CENTRO_APOYO_API_URL}/lup.php?uid=0&todo=0&leng=es&det=${id}`)
  console.log('findLup.request', request);

  return request.then((response) => {
      return {
        type: FIND_LUP,
        payload: response.data
      }
    })
    .catch((err) => {
      return {
        type: ERROR_LUP,
        payload: err.response.data
      }
    })
}

export function createLup(props){
  const request = axios.post(`${CENTRO_APOYO_API_URL}/lup-ed.php?uid=1&todo=0&leng=es&contrasena=${API_KEY}`, props);
  console.log('createLup.request', request);

  return {
    type: CREATE_LUP,
    payload: request
  }
}

export function destroyLup(id){
  const request = axios.delete(`${CENTRO_APOYO_API_URL}/lups-ed?uid=1&todo=0&leng=es&det=${id}&contrasena=${API_KEY}`);
  console.log('destroyLup.request', request);

  return {
    type: DESTROY_LUP,
    payload: request
  }
}
