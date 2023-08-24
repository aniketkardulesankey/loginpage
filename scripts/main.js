
const form = document.getElementById("loginForm");

const email = "aniket.k@sankeysolutions.com",
password = "Pass@1234";

const validateForm = function(e){
    e.preventDefault();
    const userEmail = this.email.value,
    userPassword = this.password.value;

    if(userEmail === email && userPassword === password){
        document.location.href = "welcome.html";
    }else{

        const invalidEmail = document.getElementById("invalidEmail"),
        invalidPassword = document.getElementById("invalidPassword");

        if(userEmail != email && userPassword != password){
            invalidEmail.innerText = "Your Email is not valid!";
            invalidPassword.innerText = "Your Password is not valid!";
        }else if(userEmail != email){
            invalidEmail.innerText = "Your email is not valid!";
            invalidPassword.innerText = "";
        }else if(userPassword != password){
            invalidPassword.innerText = "Your Password is not valid!";
            invalidEmail.innerText = "";
        }

    }
}

form.addEventListener("submit",validateForm)

