
    const info = dashboard();
    const username = document.querySelector(".username");
    const firstName = document.querySelector(".firstName");
    const lastName = document.querySelector(".lastName");
    username.textContent = info.username;
    lastName.textContent = info.lastName;
    firstName.textContent = info.firstName;

    const usernameDas1= document.querySelector(".username-das1,.username-profile");
    const firstNameDas1 = document.querySelector(".firstName-das1,.firstName-profile");
    const lastNameDas1 = document.querySelector(".lastName-das1,.lastName-profile");
    usernameDas1.textContent = info.username;
    firstNameDas1.textContent = info.firstName;
    lastNameDas1.textContent = info.lastName;

    const date = document.querySelector(".profile-info1");
    date.textContent = info.dateOfBirth;

    let imageUrl = {};
    const selectImage = async (picture) =>{
        try {
            const profileImage = document.getElementById('profile');
            // console.log(picture.files);
        
            if(picture.files && picture.files[0]){
                const reader = new FileReader();
                reader.onload = function (e) {
                    // console.log(e.target.result.split(',')[1]);
                    imageUrl = e.target.result.split(',')[1];
                    profileImage.src = e.target.result;
                }
                reader.readAsDataURL(picture.files[0])
            }
        } catch (error) {
            alert(error);
            console.log(error);
        }
        
    }
    
    // const updateProfile = () => {
        // }
        
        const updateProfile = async (e) =>{
            console.log(imageUrl);
            try {
                const btnUpdate = document.getElementById('profileUpdate');

                const fileData = {};
                if(imageUrl){
                    const reader = new FileReader();
                    reader.onclick = function (e) {
                        fileData.imageUrl = e.target.result;
                    }
                }

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
        } catch (error) {
           alert(error);
           console.log(error); 
        }
    }