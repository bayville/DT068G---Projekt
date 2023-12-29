"use strict"

let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");


let loginContainer = document.getElementById("loginContainer");
let loginForm = document.getElementById("loginForm")
let loginMethod = document.getElementById("loginMethod");
let loginMethodState = false;


openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
loginMethod.addEventListener('click', login);


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
