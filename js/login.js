let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
// let paassInput = document.getElementById("psd");

// let form =document.getElementById("form")
let email = document.getElementById("email")
let password = document.getElementById("password")
form.addEventListener("submit",function(event){
    event.preventDefault()
    let details ={
        email : email.value,
        password  :password.value
    };
        let savedetails = JSON.parse(localStorage.getItem("details")) || {};
    if (details.email ===savedetails.email &&
     details.password === savedetails.password){
        localStorage.setItem("isAuth", "Authenticated")
        alert("Login Successfull")
        window.location.href = '../pages/dashboard.html'
    }
    else{
        alert("Wrong credentials")
      }
})

// redirect >>>>>>> 

// let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

// if (isAuth !=="Authenticated"){
//     window.location.href = '../pages/dashboard.html'
// }
// else{
//     localStorage.clear()
// }



// stylye   >>>>>>



document.addEventListener("click", function (event) {
  if (event.target === emailInput) {
    emailInput.style.borderColor = "#5846F6";
  } else {
    emailInput.style.borderColor = "#9FAABF";
  }
});

document.addEventListener("click", function (event2) {
  if (event2.target === paassInput) {
    paassInput.style.borderColor = "#5846F6";
  } else {
    paassInput.style.borderColor = "#9FAABF";
  }
});
