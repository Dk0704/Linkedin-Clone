import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCiVRnHOrvrwqZzGavl41Nq-4ZuZrNS21U",
    authDomain: "linkedin-clone-7106c.firebaseapp.com",
    projectId: "linkedin-clone-7106c",
    storageBucket: "linkedin-clone-7106c.appspot.com",
    messagingSenderId: "185203354308",
    appId: "1:185203354308:web:7b2f4745b8de2d2c2ff791"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db,auth};