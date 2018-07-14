import { PATH_BY_TIPO } from './constants';

import moment from 'moment';
import 'moment/locale/es';

export function path_by_tipo(tipo){
  return PATH_BY_TIPO[tipo] ? PATH_BY_TIPO[tipo] : tipo;
}

export function parse_fecha(fecha){
  if (!fecha) return '';
  return moment(fecha).locale('es').format('LLL');
}

export function parse_hora(hora){
  if (!hora) return '';
  return moment(hora, 'HH:mm:ss').format('h:mm a');
}

export function parse_duracion(duracion){
  let horas = Math.floor((duracion / 60) / 60);
  let minutos = ((duracion / 60) % 60);
  return (horas > 0 ? horas + 'h ' : '') + (minutos > 0 ? minutos + 'min' : '');
}

export function parse_slides(links){
  let slides = '';
  if (links.length > 0 ){
    for (var i in links) {
      let link = links[i];
      slides += (slides.length > 0 ? ';' : '') + `${link.n211tiempo}-${link.n211slide}`;
    }
  }else{
    slides = '1-0';
  }
  return slides;
}
