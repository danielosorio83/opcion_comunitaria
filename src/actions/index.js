import axios from 'axios'

import { CENTRO_APOYO_API_URL, API_KEY } from './constants';
import { FETCH_PLANS, CREATE_PLAN, FIND_PLAN, DESTROY_PLAN } from './constants';

export function fetchPlans(){
  const request = axios.get(`${CENTRO_APOYO_API_URL}/formaciones.php?uid=0&todo=0&leng=es`);
  console.log('fetchPlans.request', request);

  return {
    type: FETCH_PLANS,
    payload: request
  }
}

export function createPlan(props){
  const request = axios.post(`${CENTRO_APOYO_API_URL}/formacion-ed.php?contrasena=${API_KEY}`, props);
  console.log('createPlan.request', request);

  return {
    type: CREATE_PLAN,
    payload: request
  }
}

export function findPlan(id){
  const request = axios.get(`${CENTRO_APOYO_API_URL}/formacion.php?det=${id}&contrasena=${API_KEY}`);
  console.log('findPlan.request', request);

  return {
    type: FIND_PLAN,
    payload: request
  }
}

export function destroyPlan(id){
  const request = axios.delete(`${CENTRO_APOYO_API_URL}/formaciones-ed?det=${id}&contrasena=${API_KEY}`);
  console.log('destroyPlan.request', request);

  return {
    type: DESTROY_PLAN,
    payload: request
  }
}
