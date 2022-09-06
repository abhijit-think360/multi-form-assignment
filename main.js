

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


//const navBar = document.createElement("nav");
// myContainer.appendChild(navBar);
// navBar.setAttribute('id', 'myNavBar');

// const logInBtn = document.createElement("span");
// const logInBtnNode = document.createTextNode("Log In");
// logInBtn.appendChild(logInBtnNode);
// const myNavBar = document.getElementById('myNavBar');


// myContainer.appendChild(navBar);
// Create a form dynamically
// var form = document.createElement("form");
// form.setAttribute("method", "post");
// form.setAttribute("action", "submit.php");

// // Create an input element for Full Name
// var FN = document.createElement("input");
// FN.setAttribute("type", "text");
// FN.setAttribute("name", "FullName");
// FN.setAttribute("placeholder", "Full Name");

//  // Create an input element for date of birth
//  var DOB = document.createElement("input");
//  DOB.setAttribute("type", "text");
//  DOB.setAttribute("name", "dob");
//  DOB.setAttribute("placeholder", "DOB");

//  // Create an input element for emailID
//  var EID = document.createElement("input");
//  EID.setAttribute("type", "text");
//  EID.setAttribute("name", "emailID");
//  EID.setAttribute("placeholder", "E-Mail ID");

//   // Create an input element for password
//   var PWD = document.createElement("input");
//   PWD.setAttribute("type", "password");
//   PWD.setAttribute("name", "password");
//   PWD.setAttribute("placeholder", "Password");

//    // Create an input element for retype-password
//    var RPWD = document.createElement("input");
//    RPWD.setAttribute("type", "password");
//    RPWD.setAttribute("name", "reTypePassword");
//    RPWD.setAttribute("placeholder", "ReEnter Password");

//             // create a submit button
//             var s = document.createElement("input");
//             s.setAttribute("type", "submit");
//             s.setAttribute("value", "Submit");
             
//             // Append the full name input to the form
//             form.appendChild(FN);
             
//             // Inserting a line break
//             form.appendChild(br.cloneNode());
             
//             // Append the DOB to the form
//             form.appendChild(DOB);
//             form.appendChild(br.cloneNode());
             
//             // Append the emailID to the form
//             form.appendChild(EID);
//             form.appendChild(br.cloneNode());
             
//             // Append the Password to the form
//             form.appendChild(PWD);
//             form.appendChild(br.cloneNode());
             
//             // Append the ReEnterPassword to the form
//             form.appendChild(RPWD);
//             form.appendChild(br.cloneNode());
             
//             // Append the submit button to the form
//             form.appendChild(s);

//             document.getElementsByTagName("body")[0]
//             .appendChild(form)

var br = document.createElement("br");

const myForm = document.createElement('form');
myForm.setAttribute('method', 'post');


var FN = document.createElement("input");
FN.setAttribute("type", "text");
FN.setAttribute("name", "FullName");
FN.setAttribute("placeholder", "Full Name");

var DOB = document.createElement("input");
DOB.setAttribute("type", "text");
DOB.setAttribute("name", "dob");
DOB.setAttribute("placeholder", "DOB");

var EID = document.createElement("input");
EID.setAttribute("type", "text");
EID.setAttribute("name", "emailID");
EID.setAttribute("placeholder", "E-Mail ID");

var PWD = document.createElement("input");
PWD.setAttribute("type", "password");
PWD.setAttribute("name", "password");
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


myContainer.appendChild(myForm);
