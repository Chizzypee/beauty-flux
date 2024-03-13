const login = async (e) => {
    try {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
    
        if(!email){
            alert("invalid email")
        }else if(email === ""){
            alert("enter email")
        }else if(!password){s
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
        
    } catch (error) {
        
    }
}


const register = async (e) => {
    try {
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
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
                username,
                dateOfBirth,
                origin,
                education,
                homeAddress,
                email,
                password,
                loggedIn: false,
                checkbox: false
            };
            // SET URL
             const url = `${baseUrl}${routes.register}`;
            //  console.log(url);
             const res = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(info),
             });
              const result = await res.json();
             if(!res.ok){
                throw new Error(result.msg);            
             }
             window.location.href = ("../log_reg/login.html");
             console.log("success:", result);

             console.log(res);
    } catch (error) {
       alert(error)
       console.log(error); 
    }
        
}
