let nameInput = document.querySelector("#nama");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let noTelpInput = document.querySelector("#no_telepon");
let submit = document.querySelector("#submit");
let nama, email, password, no_telp;



submit.addEventListener("click", () => {

    nama = nameInput.value;
    email = emailInput.value;
    password = passwordInput.value;
    no_telp = noTelpInput.value;
   
})


