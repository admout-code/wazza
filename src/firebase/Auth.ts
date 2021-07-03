import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";

const provider = new firebase.auth.GoogleAuthProvider();

export const userSignIn = () => {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        // EVERYTHING WILL PUSHED TO CONTEXT

        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
    
        // This gives you a Google Access Token. You can use it to access the Google API.
        if(credential){
            // const token = credential.accessToken;
            
            // TODO we need accessToken ?
            console.log(credential)
            const token = credential;
        }

        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
}

export const userSignOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
}

// export const userSignUp = () => {

// }