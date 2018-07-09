import axios from 'axios'

import { CENTRO_APOYO_API_URL, API_KEY } from '../constants';
import { FETCH_SITIOS, CREATE_SITIO, FIND_SITIO, DESTROY_SITIO, ERROR_SITIO } from '../constants';

export function fetchSitios(){
  const request = axios.get(`${CENTRO_APOYO_API_URL}/sitios.php?uid=0&todo=0&leng=es`);
  console.log('fetchSitios.request', request);

  return {
    type: FETCH_SITIOS,
    payload: request
  }
}

export function findSitio(id){
  let request = axios.get(`${CENTRO_APOYO_API_URL}/sitio.php?uid=0&todo=0&leng=es&det=${id}`)
  console.log('findSitio.request', request);

  return request.then((response) => {
      return {
        type: FIND_SITIO,
        payload: response.data
      }
    })
    .catch((err) => {
      return {
        type: ERROR_SITIO,
        payload: err.response ? err.response.data : err
      }
    })
}

export function createSitio(props){
  const request = axios.post(`${CENTRO_APOYO_API_URL}/sitio-ed.php?uid=1&todo=0&leng=es&contrasena=${API_KEY}`, props);
  console.log('createSitio.request', request);

  return {
    type: CREATE_SITIO,
    payload: request
  }
}

export function destroySitio(id){
  const request = axios.delete(`${CENTRO_APOYO_API_URL}/sitios-ed?uid=1&todo=0&leng=es&det=${id}&contrasena=${API_KEY}`);
  console.log('destroySitio.request', request);

  return {
    type: DESTROY_SITIO,
    payload: request
  }
}
