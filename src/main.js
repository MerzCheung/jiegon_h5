import Vue from 'vue'
import App from './App'
import router from './router'
import { IndexBar, IndexAnchor, Grid, GridItem, Icon, DropdownMenu, DropdownItem, Cell, CellGroup } from 'vant';
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Cell);
Vue.use(CellGroup);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
