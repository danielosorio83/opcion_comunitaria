import axios from 'axios'

import { CENTRO_APOYO_API_URL, API_KEY } from '../constants';
import { FIND_POPQUIZ, SUBMIT_POPQUIZ, ERROR_POPQUIZ } from '../constants';

export function findPopquiz(k211id){
  let request = axios.get(`${CENTRO_APOYO_API_URL}/examen-popquiz.php?uid=1&todo=0&leng=es&k211id=${k211id}&contrasena=${API_KEY}`)
  console.log('findPopquiz.request', request);

  return request.then((response) => {
      return {
        type: FIND_POPQUIZ,
        payload: response.data
      }
    })
    .catch((err) => {
      return {
        type: ERROR_POPQUIZ,
        payload: err.response ? err.response.data : err
      }
    })
}

export function submitPopquiz(k211id, props, callback){
  console.log(props);
  const request = axios.post(`${CENTRO_APOYO_API_URL}/examen-popquiz.php?uid=1&todo=0&leng=es&k211id=${k211id}&contrasena=${API_KEY}`, props)
    .then(() => callback());
  console.log('submitPopquiz.request', request);

  return {
    type: SUBMIT_POPQUIZ,
    payload: request
  }
}
