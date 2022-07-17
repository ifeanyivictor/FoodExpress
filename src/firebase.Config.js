import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDVxi9t0gHMN4gHsuEMjyI7EiC-ahLrwdQ",
    authDomain: "food-app-8b833.firebaseapp.com",
    databaseURL: "https://food-app-8b833-default-rtdb.firebaseio.com",
    projectId: "food-app-8b833",
    storageBucket: "food-app-8b833.appspot.com",
    messagingSenderId: "500542750871",
    appId: "1:500542750871:web:ddfc656333f04d4bb4a9d2"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage}