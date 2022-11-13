// const { auth, db, googleProvider } = require('../firebase-config');
// const {
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   // onAuthStateChanged,
//   // signOut
// } = require("firebase/auth");

// const {
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } = require( "firebase/firestore");

// class Auth {

//   async register(email, password) {
//     try {
//       return await createUserWithEmailAndPassword(auth, email, password)
//     } catch(err){
//       return err;
//     }
//   }
  
//   async signin(email, password) {
//     try {
//       return await signInWithEmailAndPassword(auth, email, password)
//     } catch(err){
//       return err;
//     }
//   }

//   async signInWtihGoogle() {
//     try {
//       const res = await signInWithPopup(auth, googleProvider);
//       const user = res.user;
//       const q = query(collection(db, "users"), where("uid", "==", user.uid));
//       const docs = await getDocs(q);
//       if (docs.docs.length === 0) {
//         await addDoc(collection(db, "users"), {
//           uid: user.uid,
//           name: user.displayName,
//           authProvider: "google",
//           email: user.email,
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   }

//   async sendPasswordReset(email) {
//     try {
//       await sendPasswordResetEmail(auth, email);
//       alert("Password reset link sent!");
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

// }

// module.exports = new Auth();