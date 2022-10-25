import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpVccZLE3_5hne3OjWtJ-MgIj9g0hhjrg",
    authDomain: "cooking-ninja-site-121c1.firebaseapp.com",
    projectId: "cooking-ninja-site-121c1",
    storageBucket: "cooking-ninja-site-121c1.appspot.com",
    messagingSenderId: "287698170594",
    appId: "1:287698170594:web:c0fb45a0402ce4bd86a4bb",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize firestore services
const projectFireStore = firebase.firestore();

export { projectFireStore };
