import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
const providerGo = new GoogleAuthProvider();
const providerFa = new FacebookAuthProvider();

import { auth } from "./firebase.service";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { db } from "./firebase.service";
import { doc, setDoc, getDoc, updateDoc } from "@firebase/firestore";

export const usersService = {
  save,
  login,
  logout,
  getLoggedinUser,
  updateUser,
  googleLogin,
  facebookLogin,
};

async function googleLogin() {
  try {
    const result = await signInWithPopup(auth, providerGo);
    const loginUser = await _getUser(result.user.email);
    if (!loginUser)
      return createPlaylist(result.user.email, result.user.displayName);
    else return loginUser;
  } catch (error) {
    console.log(error);
  }
}
async function facebookLogin() {
  try {
    const result = await signInWithPopup(auth, providerFa);
    const loginUser = await _getUser(result.user.email);
    if (!loginUser)
      return createPlaylist(result.user.email, result.user.displayName);
    else return loginUser;
  } catch (error) {
    console.log(error);
  }
}

async function _getUser(email) {
  const docRef = doc(db, "playlist", email);
  return getDoc(docRef).then((docSnap) => {
    return docSnap.data();
  });
}

async function createPlaylist(email, fullName) {
  setDoc(doc(db, "playlist", email), {
    favorites: [],
    fullName: fullName,
  });
  saveLocalUser(email);
  return { favorites: [], fullName: fullName };
}

async function save(curUser) {
  return createUserWithEmailAndPassword(auth, curUser.email, curUser.password)
    .then((userCredential) => {
      return createPlaylist(userCredential.user.email, curUser.fullName);
    })
    .catch((error) => {
      if (error.code == "auth/email-already-in-use") {
        alert("The email address is already in use");
      } else if (error.code == "auth/invalid-email") {
        alert("The email address is not valid.");
      } else if (error.code == "auth/operation-not-allowed") {
        alert("Operation not allowed.");
      } else if (error.code == "auth/weak-password") {
        alert("The password is too weak.");
      }
    });
}

async function login(curUser) {
  return signInWithEmailAndPassword(auth, curUser.email, curUser.password)
    .then((userCredential) => {
      saveLocalUser(userCredential.user.email);
      const docRef = doc(db, "playlist", userCredential.user.email);
      return getDoc(docRef).then((docSnap) => {
        return docSnap.data();
      });
    })
    .catch((error) => {
      console.log(error);
      if (error.code == "auth/email-already-in-use") {
        alert("The email address is already in use");
      } else if (error.code == "auth/invalid-email") {
        alert("The email address is not valid.");
      } else if (error.code == "auth/operation-not-allowed") {
        alert("Operation not allowed.");
      } else if (error.code == "auth/weak-password") {
        alert("The password is too weak.");
      }
    });
}

function saveLocalUser(email) {
  sessionStorage.setItem("loggedinUser", email);
}

function logout() {
  sessionStorage.removeItem("loggedinUser");
}

async function getLoggedinUser() {
  const userEmail = sessionStorage.getItem("loggedinUser");
  if (!userEmail) return null;
  const docRef = doc(db, "playlist", userEmail);
  return await getDoc(docRef).then((docSnap) => {
    return docSnap.data();
  });
}

async function updateUser(user) {
  const userEmail = sessionStorage.getItem("loggedinUser");
  const userRef = doc(db, "playlist", userEmail);
  await updateDoc(userRef, user);
}
