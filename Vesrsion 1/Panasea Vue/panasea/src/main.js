<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
=======
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

<<<<<<< HEAD
createApp(App).use(router).use(router).mount('#app')
>>>>>>> danielBernal
=======
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// createApp(App).mount('#app')
// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')
>>>>>>> danielBernal
