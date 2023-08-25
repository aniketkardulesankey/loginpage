
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

        invalidEmail.innerText = userEmail != email ? "Your Email is not valid!" : "";
        invalidPassword.innerText = userPassword != password ? "Your Password is not valid!" : "";

    }
}

form.addEventListener("submit",validateForm)

