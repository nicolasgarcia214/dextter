import { firebase } from "@firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV9qqKxFF4AZzpv3PpB2rzy85qG9R2WG8",
  authDomain: "dextter-41f40.firebaseapp.com",
  projectId: "dextter-41f40",
  storageBucket: "dextter-41f40.appspot.com",
  messagingSenderId: "256728913516",
  appId: "1:256728913516:web:99364502a5032ab830ea49",
  measurementId: "G-DVPT89679X",
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
