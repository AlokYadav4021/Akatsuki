let username = document.getElementById("fullname");
let mail = document.getElementById("email");
let password = document.getElementById("password");
let confpassword = document.getElementById("confirmPassword");
 let uuname = /^[a-zA-Z]+$/;
 let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*!_]).{8,}$/;

 function uname() {


    // username validation


 if (username.value == "") {
   document.getElementById("nerror").innerHTML = "*enter the user name";
   return false;
 }
 if (username.value.length <= 2) {
   document.getElementById("nerror").innerHTML = "*enter min 2 char";
   return false;
 }
 if(username.value.length > 15){
    document.getElementById("nerror").innerHTML = "*Username should contain less then 15 char"
    return false
 }
 if(!username.value.match(uuname)){
    document.getElementById("nerror").innerHTML = "* git Username should not contain any number"
    return false
 }


//  Email Validation


if(mail.value == ""){
    document.getElementById("emailerr").innerHTML = "Write your Email id"
    return false
}


// Password conformation


if(password.value == ""){
    document.getElementById("passerr").innerHTML = "Write a password first"
    return false
} else if(password.value.length < 8){
    document.getElementById("passerr").innerHTML = "Password is to short";
    return false
}else if (password.value.length >= 15) {
  document.getElementById("passerr").innerHTML = "*Password should not contain more then 15 character";
  return false
}
else if(!pass.test(password.value)){
    document.getElementById("passerr").innerHTML =
      "Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character.";
      return false
}


// Confirm password


if(password.value !== confpassword.value){
  document.getElementById("conpasserr").innerHTML = "Password is not matching"
  return false
}


}
