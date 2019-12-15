import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false

firebase.initializeApp(
  {
    apiKey: "AIzaSyBAOG541X8w3l8IBFCOeRBDFPAD93izVu0",
    authDomain: "vue-calendar-83ecf.firebaseapp.com",
    databaseURL: "https://vue-calendar-83ecf.firebaseio.com",
    projectId: "vue-calendar-83ecf",
    storageBucket: "vue-calendar-83ecf.appspot.com",
    messagingSenderId: "299024993342",
    appId: "1:299024993342:web:d46e2d68cbf0356c2cd56f"
  }
);

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
