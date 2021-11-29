import * as firebase from 'firebase'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAuVJU_qg2DPHXWDDmf0wJKqDEeQoNej3c",
    authDomain: "signal-clone-f797c.firebaseapp.com",
    projectId: "signal-clone-f797c",
    storageBucket: "signal-clone-f797c.appspot.com",
    messagingSenderId: "148121236405",
    appId: "1:148121236405:web:689c0e32d6898393af5ffc"
  };

  let app;
  
  if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
  } else {
      app = firebase.app()
  }


  const db = app.firestore()
  const auth = firebase.auth()

  export { db, auth }