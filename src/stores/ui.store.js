import { extendObservable } from 'mobx';

export default class UiStore {
  constructor() {
    extendObservable(this, {
      loading: true,
    });
  }
}
