// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'



// createApp(App)
// .mount('#app')

// createApp(App).mount('#app')


/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

//Bootstrap js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChartPie, faClock, faEnvelope, faGaugeHigh, faPhone, faQuoteRight, faUser, faUserGroup, faUserSecret, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faUser, faUserGroup, faChartPie, faGaugeHigh, faQuoteRight)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
