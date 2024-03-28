// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed up successfully
            console.log('User signed up:', userCredential.user);
        })
        .catch((error) => {
            // Handle errors
            console.error('Signup error:', error.message);
        });
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User logged in successfully
            console.log('User logged in:', userCredential.user);
        })
        .catch((error) => {
            // Handle errors
            console.error('Login error:', error.message);
        });
}
