
    let submitClicked = document.querySelector("#submit");

    fetch("https://634fe40678563c1d82b2b716.mockapi.io/be4/user")
                    .then(result => result.json())
                    .then(result => {console.log(user = result)})

    let user = [];

    submitClicked.addEventListener("click", function(){
        let emailInput = document.querySelector("#email").value;
        let passwordInput = document.querySelector("#password").value;

        for (i=0; i < user.length; i++) {
            if (emailInput == user[i].email && passwordInput == user[i].password ){
                console.log(emailInput +" "+ "berhasil login")
                alert("anda berhasil login")
                window.location.href = "berandaUser.html";
                return
        }
    }
        console.log("email atau password salah")
        alert("email atau password tidak terdaftar!");
    });



    

        







