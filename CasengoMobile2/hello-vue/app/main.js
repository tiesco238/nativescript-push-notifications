import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store';

import VueDevtools from 'nativescript-vue-devtools'

Vue.registerElement("MLKitTextRecognition", () => require("nativescript-plugin-firebase/mlkit/textrecognition").MLKitTextRecognition);

// custom components
import RadListView from 'nativescript-ui-listview/vue';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

const firebase = require("nativescript-plugin-firebase");

firebase.init({
  // can be used to catch in-app-messaging dynamic links, but it's not mandatory
  onDynamicLinkCallback: result => {
    console.log("Dynamic Link received: " + result);
    console.log("Dynamic Link received, url: " + result.url);
    if (result.url.indexOf("/shit") > -1) {
      // note that you could deeplink/route the user now, but let's just show an alert
    }
  }
})
    .then(() => console.log("Firebase initialized"))
    .catch(error => console.log("Error initializing Firebase: " + error));

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

Vue.use(RadListView);

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
