const signUp = document.querySelector('#login_sign_up'),
    signIn = document.querySelector("#login_sign_in"),
    loginInForm = document.querySelector('#login_register'),
    loginUpForm = document.querySelector("#login_create")


//get data from input to check before submitting
const username = document.querySelector('#username'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    passwordVerif = document.querySelector('#password2')


//form animation
signUp.addEventListener('click', () => {
    loginInForm.classList.remove('block')
    loginUpForm.classList.remove('none')

    loginInForm.classList.toggle('none')
    loginUpForm.classList.toggle('block')

})


signIn.addEventListener('click', () => {
    loginUpForm.classList.remove('block')
    loginInForm.classList.remove('none')

    loginUpForm.classList.toggle('none')
    loginInForm.classList.toggle('block')

})




//form data processing 
loginUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});


function checkInput() {

    //trim() removes the whitespace from the value
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordVerifValue = passwordVerif.value.trim()

    if (usernameValue === '') {
        setErrorFor(username, 'Veuillez rentrer un nom')
    }
    else {
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Veuillez fournir un mail valide');
    }
    else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Ce champ ne peut pas être vide');
    }
    else {
        setSuccessFor(password);
    }

    if (passwordVerifValue === '') {
        setErrorFor(password2, 'Ce champ ne peut pas être vide');

    } else if (passwordValue !== passwordVerifValue) {
        setErrorFor(password2, 'Les mots de passe ne correspondent pas');
    }

    else {
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.login_box
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'login_box error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'login_box success'

}
