import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app, auth } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";
// import { Navigate } from "react-router-dom";

console.log(auth)
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user)
    
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      uid: user.uid,
      createdAt: new Date()
    });
    // Navigate('/login'); 
    return { uid: user.uid }; 
  } catch (error) {
    console.error("Registration Error: ", error.message);
    return { error: error.message };
  }
};


export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login Error: ", error.message);
    return error.message; 
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};
