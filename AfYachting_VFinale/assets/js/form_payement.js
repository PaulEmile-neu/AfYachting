
//save all the steps in an array rather than in a node list 
const steps = Array.from(document.querySelectorAll("form .step"));
const nextButton = document.querySelectorAll('form .next_btn');
const previousButton = document.querySelectorAll('form .previous_btn');
const form = document.querySelector('form');


nextButton.forEach(button => {
    button.addEventListener('click', (e) => {
        changeStep('next');
    })
})

previousButton.forEach(button => {
    button.addEventListener('click', (e) => {
        changeStep('previous')
    })
})

//save all data in an array 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll('.input').forEach(input => {
        const { name, value } = input;
        inputs.push({ name, value });
    })

    var radio = form.querySelectorAll('.input_radio');
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            inputs.push({ "assurance_price": radio[i].value })
        }
    }

    //todo remove this line 
    console.log(inputs)

    form.reset();
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    steps[0].classList.add('active');

})

function changeStep(button) {
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    if (button === 'next' && index === 0) {
        if (checkInputStep1() == 3) {
            steps[index].classList.remove('active');
            index++;
        }
    }

    else if (button === 'next' && index === 1) {

        if (checkInputStep2() == 4) {
            steps[index].classList.remove('active');
            index++;
        }

    }

    else if (button === 'previous') {
        steps[index].classList.remove('active');
        index--;
    }



    steps[index].classList.add('active');
}


//form verif


//get all the data from the form 

const username = document.querySelector("#name"),
    email = document.querySelector("#email"),
    dateDepart = document.querySelector("#date_depart"),
    dateRetour = document.querySelector("#date_retour"),
    guestNumber = document.querySelector("#guest_number");

function checkInputStep1() {
    usernameValue = username.value.trim();
    emailValue = email.value.trim();
    var next = 0;

    if (usernameValue === '') {
        setErrorFor(username, 'Veillez rentrer votre Nom')
    }
    else {
        next++
    }

    if (emailValue === '') {
        setErrorFor(email, 'Veuillez rentrer un mail');
    }
    else {
        next++
    }

    if (!validateEmail(emailValue)) {
        setErrorFor(email, 'Email invalide')
    }
    else {
        next++
    }


    return next;

}

function checkInputStep2() {
    dateDepartValue = dateDepart.value.trim();
    dateRetourValue = dateRetour.value.trim();
    guestNumberValue = guestNumber.value.trim()
    var next = 0;

    if (dateDepartValue === '') {
        setErrorFor(dateDepart, 'Veuillez choisir une date')
    }
    else {
        next++
    }

    if (dateRetourValue === '') {
        setErrorFor(dateRetour, 'Veuillez choisir une date');
    }
    else {
        next++
    }

    if (guestNumberValue === '') {
        setErrorFor(guestNumber, 'Veuillez remplir ce champ');
    }
    else {
        next++
    }

    if (guestNumberValue > 10) {
        setErrorFor(guestNumber, 'Trop de passagers');
    }
    else {
        next++
    }

    return next;

}


function setErrorFor(input, message) {
    const formControl = input.parentElement; //.login_box
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form_group error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form_group success'

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}