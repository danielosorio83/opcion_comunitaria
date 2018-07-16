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

export function parse_times(links){
  let times = [];
  if (links.length > 0 ){
    for (var i in links) {
      let link = links[i];
      let sync_accion = (link.n211tipo_sync === 1 ? link.n211sync_img : (link.n211tipo_sync === 2 ? link.n211sync_link : parse2int(link.k211id)));
      times.push([parse2int(link.n211tiempo), parse2int(link.n211slide), parse2int(link.n211tipo_sync), sync_accion]);
    }
  }
  return times;
}

function parse2int(number){
  return parseInt(number, 10);
}
