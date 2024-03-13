// const { json } = require("express");

function Login(event) {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(!email){
        alert("invalid email")
    }else if(email === ""){
        alert("enter email")
    }else if(!password){
        alert("invalid password")
    }else if(password === " "){
        alert("enter password")
    }else if(password.length <=3){
        alert("password should be above 4 characters")
    }else{
        const userData = localStorage.getItem("user");
        if(!userData){
            alert("Account not found");
        }else{
            const userInfo = JSON.parse(userData);
            const peopleData = userInfo.find(el => el.email === email.trim());
            if(!userInfo){
                alert("user not found");
            }else if(email.trim() === userInfo.email && password.trim() === userInfo.password){
                userData.loggedIn = true;
                userData.checkbox = true;
                const updated = userInfo.filter(el => el.email !== email.trim());
                updated.push(userData);

                localStorage.setItem("user",JSON.stringify(updated));
            alert("Login successful");
            window.location.href = ("../dashboard.html");
        }else{
           alert("Incorrect password");
        }
        }
    }
}


function Register(event){
    let firstName = document.querySelector("#firstname").value;
    let lastName = document.querySelector("#lastname").value;
    let username = document.querySelector("#username").value;
    let date = document.querySelector("#date").value;
    let origin = document.querySelector("#Origin").value;
    let Education = document.querySelector("#Education").value;
    let Address = document.querySelector("#address").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirm = document.querySelector("#confirm").value;

    if(!firstName || firstName === ""){
        alert("Enter firstName");
    }else if(!lastName || lastName === ""){
        alert("Enter lastName");
    }else if(!username || username ==="" || username.length <=5){
        alert("Enter username");
    }else if(!date || date === ""){
        alert("Set date of birth");
    }else if(!origin || origin === ""){
        alert("Enter origin");
    }else if(!Education || Education === ""){
        alert("Enter educational status");
    }else if(!Address || Address === ""){
        alert("Enter home address");
    }else if(!email || email === ""){
        alert("Enter email");
    }else if(!password || password === "" || password.length <=3){
        alert("password should be 4 characters");
    }else if(password !== confirm){
        alert("Password Mismatch")
    }else{
        const info = {
            firstName,
            lastName,
            date,
            origin,
            Education,
            Address,
            email,
            password,
            loggedIn: false,
            checkbox: false
        };
        const users = localStorage.getItem("user");
        if(!users || users === null){
            const currentUser = [info]
            localStorage.setItem("user", JSON.stringify(currentUser));
        }else{
            window.location.href = ("./login.html");
            const currentUser = JSON.parse(users);
            const emailExist = currentUser.find(el => el.email === email.trim().toLowerCase());
            if(emailExist){
                alert("Account already exist");
            }else{
                currentUser.push(info);
                localStorage.setItem("user",JSON.stringify(currentUser));
                
            }
        }
    }
}

const btnReg = document.querySelector("#reg");

btnReg.addEventListener('click', function(){

    window.location.href = ("./login.html");

})