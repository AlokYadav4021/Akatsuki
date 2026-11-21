let username = document.getElementById("fullname");
let mail = document.getElementById("email");
let password = document.getElementById("password");
let confpassword = document.getElementById("confirmPassword");
 let uuname = /^[a-zA-Z]+$/;

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

}
