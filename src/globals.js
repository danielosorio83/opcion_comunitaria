import { PATH_BY_TIPO } from './constants';

export function path_by_tipo(tipo){
  return PATH_BY_TIPO[tipo] ? PATH_BY_TIPO[tipo] : tipo;
}
