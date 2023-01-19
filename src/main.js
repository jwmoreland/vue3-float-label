import { createApp } from 'vue'
import './sandbox-style.css'
import './style.css'
import App from './App.vue'
// import App from './Demo.vue'

import FloatLabel from './components/FloatLabel.vue'

export default {
    install: (app, options) => {
        app.component("FloatLabel", FloatLabel)
    }
}
