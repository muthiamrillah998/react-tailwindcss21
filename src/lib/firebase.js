import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBI6Ky6D4TK3eZfPElcEsAqZH7Tc1tky3w',
  authDomain: 'instagram-clone-30c3d.firebaseapp.com',
  projectId: 'instagram-clone-30c3d',
  storageBucket: 'instagram-clone-30c3d.appspot.com',
  messagingSenderId: '47282098706',
  appId: '1:47282098706:web:9e2134a922bf2500ad7ecb',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
