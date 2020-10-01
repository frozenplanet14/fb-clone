import firebase from 'firebase/app';
import 'firebase/auth'; // for authentication
import 'firebase/firestore'; // for cloud firestore

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-lUgerrQx34AL77H-I_niAKpgVP_VfIg',
  authDomain: 'facebook-e26bc.firebaseapp.com',
  databaseURL: 'https://facebook-e26bc.firebaseio.com',
  projectId: 'facebook-e26bc',
  storageBucket: 'facebook-e26bc.appspot.com',
  messagingSenderId: '120471548344',
  appId: '1:120471548344:web:894252cbaabd9441dedf4d',
  measurementId: 'G-7PHPX0HGYS',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
