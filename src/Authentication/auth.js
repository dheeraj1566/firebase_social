import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app, auth } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      uid: user.uid,
      createdAt: new Date(),
    });
    return { uid: user.uid };
  } catch (error) {
    console.error("Registration Error: ", error.message);
    return { error: error.message };
  }
};

// Login User
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login Error: ", error.message);
    return error.message;
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

// Get Current User
export const getCurrentUser = () => {
  return auth.currentUser;
};
