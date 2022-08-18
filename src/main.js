import { createApp } from 'vue'
import './style.css'

import FloatLabel from './components/FloatLabel.vue'

export default {
    install: (app, options) => {
        app.component("FloatLabel", FloatLabel)
    }
}



