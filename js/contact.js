// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBI44dObKM8MNQx2rY9l3VSXFGnmYTKr_g",
    authDomain: "contact-8a280.firebaseapp.com",
    databaseURL: "https://contact-8a280-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "contact-8a280",
    storageBucket: "contact-8a280.appspot.com",
    messagingSenderId: "356571204183",
    appId: "1:356571204183:web:aa6c157c3ae25563ff7112",
    measurementId: "G-BP3VZJXD79"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  
  const contactForm = document.querySelector('#contact');
  
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = contactForm['first'].value;
    const last = contactForm['last'].value;
    const email = contactForm['email'].value;
    const message = contactForm['message'].value;
    push(ref(database, 'contact'), {
      name: first,
      last: last,
      email: email,
      message: message
    });
  
    contactForm.reset();
  });