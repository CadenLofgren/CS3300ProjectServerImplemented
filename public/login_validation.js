const form = document.getElementById('login_form')

//get form data from text boxes
const firstNameInput = document.getElementById('firstNameInput')
const lastNameInput = document.getElementById('lastNameInput')
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const repeatPasswordInput = document.getElementById('repeatPasswordInput')
const errorMessage = document.getElementById('errorsMessage')



form.addEventListener('submit', (e) => {
    
    let errors = []

    if (firstNameInput) {
        errors = getSignUpFormErrors(firstNameInput.value, lastNameInput.value, emailInput.value, passwordInput.value, repeatPasswordInput.value)
    }
    else { //in login page if not firstname input
        errors = getLoginFormErrors(emailInput.value, passwordInput.value)
    }

    if (errors.length > 0) { //if any errors in validation
        e.preventDefault() //prevent form submitting
        errorMessage.innerText = errors.join(". ") //list errors
        errorMessage.innerText = "Error"
    }
    else{
        //Can open login page in new tab after validation
        //However can't replace current window with login page without preventing form submission

        //e.preventDefault()
        //window.location.href = 'login_page.html'

        if(firstNameInput)//to make sure it only opens new page after validating sign on page
        {
            console.log("logged in")
            window.open('/dashboard', '_blank')

        }
    }
    
})

function getSignUpFormErrors(firstName, lastName, email, password, repeatPassword) {
    let errors = []

    if (firstName === '' || firstName === null) {
        errors.push('First Name is Required')
        firstNameInput.parentElement.classList.add('incorrect')
    }
    if (lastName === '' || lastName === null) {
        errors.push('Last Name is Required')
        lastNameInput.parentElement.classList.add('incorrect')
    }
    if (email === '' || email === null) {
        errors.push('Email is Required')
        emailInput.parentElement.classList.add('incorrect')
    }
    if (password === '' || password === null) {
        errors.push('Password is Required')
        passwordInput.parentElement.classList.add('incorrect')
    }
    if (password !== repeatPassword) {
        errors.push('Password Does Not Match')
        passwordInput.parentElement.classList.add('incorrect')
        repeatPasswordInput.parentElement.classList.add('incorrect')
    }

    return errors
}

function getLoginFormErrors(email, password){
    let errors = []

    if (email === '' || email === null) {
        errors.push('Email is Required')
        emailInput.parentElement.classList.add('incorrect')
    }
    if (password === '' || password === null) {
        errors.push('Password is Required')
        passwordInput.parentElement.classList.add('incorrect')
    }

    return errors
}

const allInputs = [firstNameInput, emailInput, passwordInput, repeatPasswordInput].filter(input => input != null)

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            errorMessage.innerText = ''
        }
    })
})