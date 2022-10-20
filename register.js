window.onload = function () {
    let submitClicked = document.querySelector("#submit");
    submitClicked.addEventListener("click", function () {
      let nama = document.querySelector("#nama").value;
      let email = document.querySelector("#email").value;
      let password = document.querySelector("#password").value;
      let nomorTelepon = document.querySelector("#no_telepon").value;

  
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
        .then((data) => console.log(data))
        .then(() => location.reload());
    });
  };
  


