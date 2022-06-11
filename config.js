import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDeEoMV66afuQblNiXA9aQOq6eCG5UzbBU",
  authDomain: "buzzerapp-ebc9d.firebaseapp.com",
  databaseURL: "https://buzzerapp-ebc9d-default-rtdb.firebaseio.com",
  projectId: "buzzerapp-ebc9d",
  storageBucket: "buzzerapp-ebc9d.appspot.com",
  messagingSenderId: "602271041203",
  appId: "1:602271041203:web:9441e7675eebd933ad12c6"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()