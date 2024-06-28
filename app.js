
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

  import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signOut  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAPj5E0QYVOeDGGjIY1z2GByn2HKvyLHYY",
    authDomain: "my-first-project-9058d.firebaseapp.com",
    projectId: "my-first-project-9058d",
    storageBucket: "my-first-project-9058d.appspot.com",
    messagingSenderId: "542475872209",
    appId: "1:542475872209:web:fcc0ffd5ba024a5e2d22f0",
    measurementId: "G-NPDG8RKDQ5"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  
const auth = getAuth();
var auth_container = document.getElementById("auth_container")
var user_container = document.getElementById("user_container")
var user_email = document.getElementById("user_email")
var logout_btn = document.getElementById("logout_btn")


onAuthStateChanged(auth, (user) => {
  if (user) {
  console.log("User is logged in");
    const uid = user.uid;
    auth_container.style.display = "none"
    user_container.style.display = "block"
    user_email.innerText = user.email
  } else {
    console.log("User is not logged in");
      auth_container.style.display = "block"
    user_container.style.display = "none"
  }
});


var signup_email = document.getElementById("signup_email")
var signup_password = document.getElementById("signup_password")
var signup_btn = document.getElementById("signup_btn")

signup_btn.addEventListener("click", ()=>{

    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); 
})

var signIn_email = document.getElementById("signIn_email")
var signIn_password = document.getElementById("signIn_password")
var signIn_btn = document.getElementById("signIn_btn")



signIn_btn.addEventListener("click", ()=>{
    signInWithEmailAndPassword(auth, signIn_email.value, signIn_password.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log("User is signed in");
 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
})



logout_btn.addEventListener("click", ()=>{
    signOut(auth).then(() => {
       console.log("User is signed out");
      }).catch((error) => {
     
      });
})
