import { createApp } from 'vue' // 1.import createApp from vue


import App from './App' //3.Import comp App.vue
const app = createApp(App);

//---Global registration UI 
import components from '@/components/UI'
components.forEach(component => {
    app.component(component.name, component)// Global registration UI 
}
)

app.mount('#app')// 2.create app and mount it in div #app
