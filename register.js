window.onload = function () {
      let submitClicked = document.querySelector("#submit");
      
      fetch("https://634fe40678563c1d82b2b716.mockapi.io/be4/user")
                    .then(result => result.json())
                    .then(result => {console.log(user = result)})

      let user = [];
      
    submitClicked.addEventListener("click", function () {
      
      let nama = document.querySelector("#nama").value;
      let email = document.querySelector("#email").value;
      let password = document.querySelector("#password").value;
      let nomorTelepon = document.querySelector("#no_telepon").value;
      

      for (i=0; i < user.length; i++) {
        if (nama == user[i].nama && email == user[i].email && password == user[i].password && nomorTelepon == user[i].nomorTelepon){
            console.log(nama +" "+ "Sudah Terdaftar")
            alert("anda sudah terdaftar")
            return
        }
      } 

      fetch("https://634fe40678563c1d82b2b716.mockapi.io/be4/user", {
  
        method: "POST",
  
        headers: {
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify({
          nama: nama,
          email: email,
          password: password,
          nomorTelepon: nomorTelepon,
          
        }),
  
      })
        .then((response) => response.json())
        .then((data) => console.log(data = user))
        .then(() => location.reload());

        alert("Anda berhasil daftar, Silahkan Login!")

      
        
    
    });

  };
  


