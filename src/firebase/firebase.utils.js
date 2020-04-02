import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAgtT9UOS0EAmyHgbrc1N0F3MdkRvuOXT4",
  authDomain: "devpro-wear-db.firebaseapp.com",
  databaseURL: "https://devpro-wear-db.firebaseio.com",
  projectId: "devpro-wear-db",
  storageBucket: "devpro-wear-db.appspot.com",
  messagingSenderId: "245967123220",
  appId: "1:245967123220:web:0063b6aae4df8567898801",
  measurementId: "G-ZTMYKFMGJM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
