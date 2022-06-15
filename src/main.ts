
import { createApp  } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueCookieNext } from 'vue-cookie-next'

const app = createApp(App).use(store).use(router)

VueCookieNext.config({ expire: '7d' })
app.use(VueCookieNext)

app.mount('#app')
