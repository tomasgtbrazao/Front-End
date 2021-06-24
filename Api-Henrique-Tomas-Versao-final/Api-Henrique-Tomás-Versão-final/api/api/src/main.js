import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from "firebase";

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

const firebaseConfig = {
  apiKey: "AIzaSyChKJYgHLvOdhkY-lGc_Wq0K-4AMGkj4rU",
  authDomain: "api-brewery.firebaseapp.com",
  projectId: "api-brewery",
  storageBucket: "api-brewery.appspot.com",
  messagingSenderId: "184956767404",
  appId: "1:184956767404:web:6252fc92fca4fd3a17a309"
};

firebase.initializeApp(firebaseConfig);
