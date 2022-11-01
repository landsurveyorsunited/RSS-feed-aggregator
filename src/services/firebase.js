import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKEFBnHme7nqqj1zJGDDfU1CE3bX2prwM",
  authDomain: "land-surveyors-united.firebaseapp.com",
  projectId: "land-surveyors-united",
  storageBucket: "land-surveyors-united.appspot.com",
  appId: "1:983786770163:web:eaf17bbb9391805f03b186",
};

firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();

export { DB };
