import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCBIMgxms3pVNJHsh24vXzJwIOEhQ_7IQw",
    authDomain: "image-fun-chat.firebaseapp.com",
    projectId: "image-fun-chat",
    storageBucket: "image-fun-chat.appspot.com",
    messagingSenderId: "312311818263",
    appId: "1:312311818263:web:e950726ba7b8996d669452"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db,storage,auth,provider}
  