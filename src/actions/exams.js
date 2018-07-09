import axios from 'axios'

import { CENTRO_APOYO_API_URL, API_KEY } from '../constants';
import { FETCH_EXAMS, CREATE_EXAM, FIND_EXAM, DESTROY_EXAM, ERROR_EXAM } from '../constants';

export function fetchExams(){
  const request = axios.get(`${CENTRO_APOYO_API_URL}/examenes.php?uid=0&todo=0&leng=es`);
  console.log('fetchExams.request', request);

  return {
    type: FETCH_EXAMS,
    payload: request
  }
}

export function findExam(id){
  let request = axios.get(`${CENTRO_APOYO_API_URL}/examen.php?uid=0&todo=0&leng=es&det=${id}`)
  console.log('findExam.request', request);

  return request.then((response) => {
      return {
        type: FIND_EXAM,
        payload: response.data
      }
    })
    .catch((err) => {
      return {
        type: ERROR_EXAM,
        payload: err.response ? err.response.data : err
      }
    })
}

export function createExam(props){
  const request = axios.post(`${CENTRO_APOYO_API_URL}/examen-ed.php?uid=1&todo=0&leng=es&contrasena=${API_KEY}`, props);
  console.log('createExam.request', request);

  return {
    type: CREATE_EXAM,
    payload: request
  }
}

export function destroyExam(id){
  const request = axios.delete(`${CENTRO_APOYO_API_URL}/examenes-ed?uid=1&todo=0&leng=es&det=${id}&contrasena=${API_KEY}`);
  console.log('destroyExam.request', request);

  return {
    type: DESTROY_EXAM,
    payload: request
  }
}
