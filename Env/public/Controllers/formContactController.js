import { Validations } from "../Services/validations.js";

const btnSubmit = document.querySelector("#formContactSubmit");

btnSubmit.addEventListener("click", () => {
    let formState = true;

    const name = document.querySelector('[name="name"]').value;
    console.log(name);
    if (Validations.limitString(name, 40) == false) {
        alert("Warn Name is incorrect");
        formState = false;
    }

    const message = document.querySelector('[name="message"]').value;
    console.log(message);
    if (Validations.limitString(message, 120) == false) {
        alert("Warn Message is incorrect");
        formState = false;
    }

    if (formState == true) {
        alert("Succesfully Message Send");
    }

});


/*
Daniel Quintero Henriquez
Challenge Alura Latam
Oracle One Next Education*/