/*Validate Form Add_Products and Form__Contact*/


let form = document.querySelectorAll(".input__verification");
//[0]Wrong [1]Regular [2]Correct
colors = ["#C54545", "#C8C8C8", "#137E3B"]
    // border Properties
border = ["1px", "solid"];

form.forEach(input => {
    input.onfocus = () => {
        input.parentNode.style.borderBottom = " " + border[0] + " " + border[1] + " " + colors[2] + " ";
    }
    input.onblur = () => {
        if (input.value.trim().length == 0) {
            input.parentNode.style.borderBottom = " " + border[0] + " " + border[1] + " " + colors[0] + " ";
        } else {
            input.parentNode.style.borderBottom = " " + border[0] + " " + border[1] + " " + colors[1] + " ";
        }
    }
});

/* Validate Form Login*/

let formLogin = document.querySelectorAll(".input__login");

formLogin.forEach(inputusr => {
    inputusr.onfocus = () => {
        inputusr.style.borderBottom = " " + border[0] + " " + border[1] + " " + colors[2] + " ";
    }
    inputusr.onblur = () => {
        if (inputusr.value.trim().length == 0) {
            inputusr.style.borderBottom = " " + border[0] + " " + border[1] + " " + colors[0] + " ";
        } else {
            inputusr.style.borderBottom = " " + border[0] + " " + border[1] + " " + colors[1] + " ";
        }
    }
})


/*
  Basic Form Validation By Daniel Quintero Henriquez
  Challenge Alura Latam
  Oracle One Next Education
*/