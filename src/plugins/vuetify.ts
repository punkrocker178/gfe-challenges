// Styles - import settings before vuetify/styles to customize Vuetify
import '@/styles/settings.scss'
import '@/styles/layers.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'system',
  },
})
