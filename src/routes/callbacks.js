import store from '../store';
import { fetchPlans } from '../actions';

export function onCentroApoyoEnter() {
  store.dispatch(fetchPlans());
}
