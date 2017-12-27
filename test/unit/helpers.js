import Vue from 'vue';
import Vuex from 'vuex';

import store from '@/store';

export const testComponent = (name) => {
  return {
    render: function (createElement) {
      return createElement('div', `test ${name}`);
    }
  };
};

export const mount = (component, state, stubComponents) => {
  const Constructor = Vue.extend(component);
  const store = new Vuex.Store({ state });

  return new Constructor({
    store,
    components: stubComponents
  }).$mount();
};
