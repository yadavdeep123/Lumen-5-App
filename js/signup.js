

let form =document.getElementById("form")
console.log(form)
let name1 = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
form.addEventListener("submit",function(event){
    event.preventDefault()
    let details ={
        name:name1.value,
        email : email.value,
        password  :password.value
    };
    localStorage.setItem("details", JSON.stringify(details));
    alert("Account Created Succesfully")
})








// let email = document.getElementById("email");
// let password = document.getElementById("psd");
// let name1 = document.getElementById("name");

document.addEventListener('click', function (event) {
    if (event.target === email) {
        email.style.borderColor = "#5846F6";
        
    } else {
        email.style.borderColor = "#9FAABF";
    }
});

document.addEventListener('click',function(event2){
    if(event2.target === password){
        password.style.borderColor = "#5846F6"
    }
    else{
        password.style.borderColor = "#9FAABF"
    }
})

document.addEventListener('click',function(event3){
    if(event3.target === name1){
        name1.style.borderColor = "#5846F6"
    }
    else{
        name1.style.borderColor = "#9FAABF"
    }
})







