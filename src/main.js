import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let app = createApp(App)

app.config.globalProperties.backend_url = "https://2q160u1y2h.execute-api.us-east-1.amazonaws.com/test"

app.use(router).mount('#app')
