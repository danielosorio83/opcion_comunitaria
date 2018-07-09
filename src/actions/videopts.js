import axios from 'axios'

import { CENTRO_APOYO_API_URL, API_KEY } from '../constants';
import { FETCH_VIDEOPTS, CREATE_VIDEOPT, FIND_VIDEOPT, DESTROY_VIDEOPT, ERROR_VIDEOPT } from '../constants';

export function fetchVideopts(){
  const request = axios.get(`${CENTRO_APOYO_API_URL}/videopts.php?uid=0&todo=0&leng=es`);
  console.log('fetchVideopts.request', request);

  return {
    type: FETCH_VIDEOPTS,
    payload: request
  }
}

export function findVideopt(id){
  let request = axios.get(`${CENTRO_APOYO_API_URL}/videopt.php?uid=0&todo=0&leng=es&det=${id}`)
  console.log('findVideopt.request', request);

  return request.then((response) => {
      return {
        type: FIND_VIDEOPT,
        payload: response.data
      }
    })
    .catch((err) => {
      return {
        type: ERROR_VIDEOPT,
        payload: err.response ? err.response.data : err
      }
    })
}

export function createVideopt(props){
  const request = axios.post(`${CENTRO_APOYO_API_URL}/videopt-ed.php?uid=1&todo=0&leng=es&contrasena=${API_KEY}`, props);
  console.log('createVideopt.request', request);

  return {
    type: CREATE_VIDEOPT,
    payload: request
  }
}

export function destroyVideopt(id){
  const request = axios.delete(`${CENTRO_APOYO_API_URL}/videopts-ed?uid=1&todo=0&leng=es&det=${id}&contrasena=${API_KEY}`);
  console.log('destroyVideopt.request', request);

  return {
    type: DESTROY_VIDEOPT,
    payload: request
  }
}
