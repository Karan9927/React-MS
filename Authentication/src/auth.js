// // auth.js

// import {
//   auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "./firebase";

// export const register = async ({ email, password }) => {
//   try {
//     const resp = await createUserWithEmailAndPassword(auth, email, password);
//     console.log("Registration success");
//     return resp.user;
//   } catch (error) {
//     console.error("Error signing up:", error.message);
//     throw error;
//   }
// };

// export const login = async ({ email, password }) => {
//   try {
//     const res = await signInWithEmailAndPassword(auth, email, password);
//     console.log("Login success");
//     return res.user;
//   } catch (error) {
//     console.error("Error logging in:", error.message);
//     throw error;
//   }
// };
