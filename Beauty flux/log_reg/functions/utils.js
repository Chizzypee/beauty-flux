const login = async (e) => {
    try {
        e.preventDefault();
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
    
        if(!username){
            throw new Error("Username is required");
        }else if(username === ""){
            throw new Error("Username invalid");
        }else if(!password){
            throw new Error("password is required");
        }else if(password === " "){
            throw new Error("password is invalid");
        }else if(password.length <=3){
            throw new Error("password should be 4 characters");
        }// SET URL
         
        const info = {
            username,
            password,
        }
        console.log(info);
        
        const url = `${baseUrl}${routes.login}`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(info),
        });
          const result = await res.json();
         if(!res.ok){
            throw new Error(result.error);            
         }
         console.log(res);
         console.log("success:", result);

        const user = result.user;
        user.refreshToken = result.refreshToken;
        localStorage.setItem("user",JSON.stringify(user));
        window.location.href ="../Dashboard/dashboard.html";

    } catch (error) {
        alert(error)
        console.log(error);  
    }
}


const register = async (e) => {
    try {
        e.preventDefault();
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        let middleName = document.querySelector("#middleName").value;
        let number = document.querySelector("#number").value;
        let username = document.querySelector("#username").value;
        let dateOfBirth = document.querySelector("#date").value;
        let origin = document.querySelector("#Origin").value;
        let education = document.querySelector("#Education").value;
        let homeAddress = document.querySelector("#address").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let confirm = document.querySelector("#confirm").value;
    
        if(!firstName || firstName === ""){
            throw new Error("Enter first name");
        }else if(!lastName || lastName === ""){
            throw new Error("Enter lastName");
        }else if(!middleName || middleName === ""){
            throw new Error("Enter middle name");
        }else if(!number || number === ""){
            throw new Error("Enter Phone number");
        }else if(!username || username ===""){
            throw new Error("Enter username");
        }else if(!dateOfBirth || dateOfBirth === ""){
            throw new Error("Enter date");
        }else if(!origin || origin === ""){
            throw new Error("Enter origin");
        }else if(!education || education === ""){
            throw new Error("Enter Education");
        }else if(!homeAddress || homeAddress === ""){
            throw new Error("Enter Address");
        }else if(!email || email === ""){
            throw new Error("Enter email");
        }else if(!password || password === "" || password.length <=3){
            throw new Error("password should be 4 characters");
        }else if(password !== confirm){
            throw new Error("Password Mismatch");
        }
            const info = {
                firstName,
                lastName,
                middleName,
                number,
                username,
                dateOfBirth,
                origin,
                education,
                homeAddress,
                email,
                password,
                loggedIn: false,
                checkbox: false,
            };
            // SET URL
             const url = `${baseUrl}${routes.register}`;
             console.log(url);
             const res = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(info),
             });
              const result = await res.json();
             if(!res.ok){
                throw new Error(result.error);            
             }
             window.location.href = ("../log_reg/login.html");
    } catch (error) {
       alert(error)
       console.log(error); 
    }
        
}

const dashboard = () =>{
    try {
        const details = JSON.parse(localStorage.getItem("user"));
        return details
    } catch (error) {
        
    }
}

