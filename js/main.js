"use strict";


let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

//Get HTML elements
let loginContainer = document.getElementById("loginContainer");
let loginForm = document.getElementById("loginForm")
let loginMethod = document.getElementById("loginMethod");
let returnTrip = document.getElementById("returnTrip");
let returnTripLink = document.getElementById("returnTripLink");
let pauseDate = document.getElementById("pauseDate");

let loginMethodState = false; //Handling login method - Bank ID or Personal code


openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
// pauseFormEl.addEventListener('submit', console.log(pauseFormEl.value));

if (loginMethod) {
    loginMethod.addEventListener('click', login);
}

if (returnTripLink) {
    returnTripLink.addEventListener('click', addReturnTrip);
}

if (pauseDate){
    const urlParams = new URLSearchParams(window.location.search);
    const formDate = urlParams.get('date');
    pauseDate.innerHTML = formDate;
}




function addReturnTrip() {
    if (returnTrip.innerHTML === "") {
        console.log("Börjar skapa html innehåll");
        // Create the labels and input elements for the form
        let travelFrom2Label = document.createElement('label');
        let travelFrom2 = document.createElement('input');
        let travelTo2Label = document.createElement('label');
        let travelTo2 = document.createElement('input');
        let dateReturnLabel = document.createElement('label');
        let dateReturn = document.createElement('input');  
        let timeReturnLabel = document.createElement('label');
        let timeReturn = document.createElement('input');
        let passengersReturnLabel = document.createElement('label');
        let passengersReturn = document.createElement('input');

        // Store value for adresses
        let obj1 = document.getElementById("travelFrom").value;
        let obj2 = document.getElementById("travelTo").value;

        // Create labels for form-elements
        travelFrom2Label.setAttribute('for','travelFrom2');
        travelFrom2Label.innerHTML = "Res från *";
        travelTo2Label.setAttribute('for', 'travelTo2');
        travelTo2Label.innerHTML = "Res till *";
        dateReturnLabel.setAttribute('for', 'dateReturn');
        dateReturnLabel.innerHTML = "Datum *";
        timeReturnLabel.setAttribute('for', 'timeReturn');
        timeReturnLabel.innerHTML = "Tid *";
        passengersReturnLabel.setAttribute('for', 'passengersReturn');
        passengersReturnLabel.innerHTML = "Medresenärer";

        // Add attributes to elements
        travelFrom2.setAttribute('type', 'text');
        travelFrom2.setAttribute('id', 'travelFrom2');
        travelFrom2.setAttribute('list', 'adressList');
        travelFrom2.setAttribute('placeholder', 'Var vill du resa ifrån?');
        travelFrom2.setAttribute('value', obj2);
        travelFrom2.setAttribute('required', '');
        travelTo2.setAttribute('type', 'text');
        travelTo2.setAttribute('id', 'travelTo2');
        travelTo2.setAttribute('list', 'adressList');
        travelTo2.setAttribute('placeholder', 'Vart vill du resa?');
        travelTo2.setAttribute('value', obj1);
        travelTo2.setAttribute('required', '');
        dateReturn.setAttribute('type', 'date');
        dateReturn.setAttribute('id', 'dateReturn');
        dateReturn.setAttribute('required', '');
        timeReturn.setAttribute('type', 'time');
        timeReturn.setAttribute('id', 'timeReturn');
        timeReturn.setAttribute('required', '');
        passengersReturn.setAttribute('type', 'number');
        passengersReturn.setAttribute('id', 'passengersReturn');
        passengersReturn.setAttribute('value', 0);
        passengersReturn.setAttribute('placeholder', 'Antal medresenärer');
        passengersReturn.setAttribute('required', '');

        // Append to render the elements to the DOM
        returnTrip.appendChild(travelFrom2Label);
        returnTrip.appendChild(travelFrom2);
        returnTrip.appendChild(travelTo2Label);
        returnTrip.appendChild(travelTo2);
        returnTrip.appendChild(dateReturnLabel);
        returnTrip.appendChild(dateReturn);
        returnTrip.appendChild(timeReturnLabel);
        returnTrip.appendChild(timeReturn);
        returnTrip.appendChild(passengersReturnLabel);
        returnTrip.appendChild(passengersReturn);

        //Change text on link
        returnTripLink.innerHTML = "Ta bort returresa"
    }
   else {
        console.log("Tömmer innehåll");
        returnTrip.innerHTML = "";
        returnTripLink.innerHTML = "Lägg till returresa"
        console.log("Innehåll tömt");
   }
}

function shiftAdress() {
    let obj1 = document.getElementById("travelFrom").value;
    let obj2 = document.getElementById("travelTo").value;

    let temp = obj1;
    obj1 = obj2;
    obj2 = temp;
    
    // Save the swapped values to the input element.
    document.getElementById('travelFrom').value = obj1;
    document.getElementById('travelTo').value = obj2;
  }



function toggleMenu() {
    let navMenu = document.getElementById("nav");
    console.log(navMenu);
    let style = window.getComputedStyle(navMenu);

    if(style.display === "none") {
        navMenu.style.display = "block";
    } else {
        navMenu.style.display = "none";
    }
}

//Function to delete and create form fields for Bank ID vs Personal code
function login() {
    if (loginMethodState === false) {
        loginForm.innerHTML = "";
        let personNummerField = document.createElement('input');
        let personNummerLabel = document.createElement('label');
        let personligKodField = document.createElement('input');
        let personligKodLabel = document.createElement('label');
        let loggaInButton = document.createElement('button');

        loginMethod.innerHTML = "Logga in med Bank-ID";

        loggaInButton.setAttribute('type', 'submit');
        loggaInButton.setAttribute('class', 'button--primary');
        loggaInButton.innerHTML = "Logga in med personlig kod <i class='ri-arrow-right-circle-line'></i>";

        personNummerLabel.setAttribute('for','personNummer');
        personNummerLabel.innerHTML = "Personnummer";
        personligKodLabel.setAttribute('for','personligKod');
        personligKodLabel.innerHTML = "Personlig kod";

        personNummerField.setAttribute('type','text');
        personNummerField.setAttribute('id','personNummer');
        personNummerField.setAttribute('placeholder','ååååmmdd-xxxx');

        personligKodField.setAttribute('type','text');
        personligKodField.setAttribute('id','personligKod');
        personligKodField.setAttribute('placeholder','xxxx');

        loginForm.appendChild(personNummerLabel);
        loginForm.appendChild(personNummerField);
        loginForm.appendChild(personligKodLabel);
        loginForm.appendChild(personligKodField);
        loginForm.appendChild(loggaInButton);
        loginMethodState = true;
        return loginMethodState;
    }
    else {
        loginForm.innerHTML = "";
        let personNummerField = document.createElement('input');
        let personNummerLabel = document.createElement('label');
        let loggaInButton = document.createElement('button');
    
        loginMethod.innerHTML = "Logga in med personlig kod";
    
        loggaInButton.setAttribute('type', 'submit');
        loggaInButton.setAttribute('class', 'button--primary');
        loggaInButton.innerHTML = "Logga in med Bank-ID <i class='ri-arrow-right-circle-line'></i>";
    
    
        personNummerLabel.setAttribute('for','personNummer');
        personNummerLabel.innerHTML = "Personnummer";
    
        personNummerField.setAttribute('type','text');
        personNummerField.setAttribute('id','personNummer');
        personNummerField.setAttribute('placeholder','ååååmmdd-xxxx');
    
    
        loginForm.appendChild(personNummerLabel);
        loginForm.appendChild(personNummerField);
        loginForm.appendChild(loggaInButton);
        loginMethodState = false;
        return loginMethodState;
    }
}
