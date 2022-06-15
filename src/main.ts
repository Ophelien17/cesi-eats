import { createApp  } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueCookieNext } from 'vue-cookie-next'
import vuetify from './plugins/vuetify'

const app = createApp(App).use(store).use(router).use(vuetify)

VueCookieNext.config({ expire: '7d' })
app.use(VueCookieNext)

app.mount('#app')