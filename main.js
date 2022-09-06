

var myContainer = document.getElementById('container');

//company name
const companyName = document.createElement("span");
const node = document.createTextNode("Think360");
companyName.appendChild(node);
//myContainer.appendChild(companyName);

//log in button
const logInBtn = document.createElement("span");
const logInBtnNode = document.createTextNode("Log In");
logInBtn.appendChild(logInBtnNode);

//navBar
const myNavBar = document.createElement("nav");
myNavBar.setAttribute('id', 'myNavBar');

//adding companyName to navBAr
myNavBar.appendChild(companyName);

//adding logInBtn to navBar
myNavBar.appendChild(logInBtn);

//setting navBar display property
//document.getElementById('myNavBar').style.display = flex;
// document.getElementById()
//adding navBar to myConatainer
myContainer.appendChild(myNavBar);



var br = document.createElement("br");

const myForm = document.createElement('form');
myForm.setAttribute('method', 'post');


var FN = document.createElement("input");
FN.setAttribute("type", "text");
FN.setAttribute("name", "FullName");
FN.setAttribute('id', 'fullName');
FN.setAttribute("placeholder", "Full Name");

var DOB = document.createElement("input");
DOB.setAttribute("type", "text");
DOB.setAttribute("name", "dob");
DOB.setAttribute('id', 'dob');
DOB.setAttribute("placeholder", "DOB");

var EID = document.createElement("input");
EID.setAttribute("type", "text");
EID.setAttribute("name", "emailID");
EID.setAttribute('id', 'email');
EID.setAttribute("placeholder", "E-Mail ID");

var PWD = document.createElement("input");
PWD.setAttribute("type", "password");
PWD.setAttribute("name", "password");
PWD.setAttribute('id', 'password');
PWD.setAttribute("placeholder", "Password");

// Create an input element for retype-password
var RPWD = document.createElement("input");
RPWD.setAttribute("type", "password");
RPWD.setAttribute("name", "reTypePassword");
RPWD.setAttribute("placeholder", "ReEnter Password");

 // create a submit button
var s = document.createElement("input");
s.setAttribute("type", "submit");
s.setAttribute("value", "Submit");
s.addEventListener("click", store);





myForm.appendChild(FN);
myForm.appendChild(br.cloneNode());
myForm.appendChild(DOB);
myForm.appendChild(br.cloneNode());
myForm.appendChild(EID);
myForm.appendChild(br.cloneNode());
myForm.appendChild(PWD);
myForm.appendChild(br.cloneNode());
myForm.appendChild(RPWD);
myForm.appendChild(br.cloneNode());
myForm.appendChild(s);
myForm.appendChild(br.cloneNode());

function store(){
    var FN = document.getElementById('fullName');
    var EID= document.getElementById("email");
    var DOB = document.getElementById("dob");
    var PWD = document.getElementById("password");


    localStorage.setItem("FullName", FN.value);
    localStorage.setItem("Email", EID.value);
    localStorage.setItem("DOB", DOB.value);
    localStorage.setItem("Password", PWD.value);
    alert("Data saved successfully!:)");
    const registeredName = document.createElement('p');
const registeredEmail = document.createElement('p');
const registeredDOB = document.createElement('p');
const registeredPassword = document.createElement('p');

var storedName = localStorage.getItem("FullName");
var storedEmail = localStorage.getItem("Email");
var storedDOB = localStorage.getItem("DOB");
var storedPassword = localStorage.getItem("Password");

registeredName.innerHTML = storedName;
registeredEmail.innerHTML = storedEmail;
registeredDOB.innerHTML = storedDOB;
registeredPassword.innerHTML = storedPassword;
    myContainer.appendChild(registeredName);
    myContainer.appendChild(registeredEmail);
    myContainer.appendChild(registeredDOB);
    myContainer.appendChild(registeredPassword);

    event.preventDefault();
   }






myContainer.appendChild(myForm);
