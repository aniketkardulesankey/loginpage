
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
        if(userEmail != email && userPassword != password){
            const invalidEmail = document.getElementById("invalidEmail");
            const invalidPassword = document.getElementById("invalidPassword")
            invalidEmail.innerText = "Your email is not valid!";
            invalidPassword.innerText = "Your Password is not valid!";
        }else if(userEmail != email){
            const invalidEmail = document.getElementById("invalidEmail");
            invalidEmail.innerText = "Your email is not valid!";
        }else if(userPassword != password){
            const invalidPassword = document.getElementById("invalidPassword")
            invalidPassword.innerText = "Your Password is not valid!";
        }
    }
}

form.addEventListener("submit",validateForm)

