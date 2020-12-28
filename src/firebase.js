import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDFqWB6tDQlBY70L5jwSSC1XnXgikE_jT8",
    authDomain: "linkedin-clone-d3f53.firebaseapp.com",
    projectId: "linkedin-clone-d3f53",
    storageBucket: "linkedin-clone-d3f53.appspot.com",
    messagingSenderId: "258937067258",
    appId: "1:258937067258:web:a8b765ee5bb1bcb8f8db43"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };