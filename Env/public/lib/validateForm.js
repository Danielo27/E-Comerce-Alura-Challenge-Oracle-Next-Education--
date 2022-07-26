const color = ["#C54545", "#C8C8C8", "#137E3B"]; //COLORS 0:ERROR--1:DEFAULT--2:CORRECTO
const border = ["1px", "solid"]; //BORDER--PROPERTIES

function contactForm(element, type) {
    let properties = "";
    element.forEach(element => {
        element.onfocus = () => { //CUANDO--ESTA--SELECCIONADO
            properties = `${border[0]} ${border[1]} ${color[2]}`;
            formType(element, type, properties);
        }

        element.onblur = () => {
            if (element.value.trim().length == 0) { //CUANDO--HAY--ERROR
                properties = `${border[0]} ${border[1]} ${color[0]}`;
                formType(element, type, properties);
            } else { //CUANDO--ESTA--COMPLETO
                properties = `${border[0]} ${border[1]} ${color[1]}`;
                formType(element, type, properties);
            }
        }
    })
}

function formType(element, type, properties) {
    //1:CONTACT-FORM---2:LOGIN-FORM
    switch (type) {
        case 1:
            element.parentNode.style.borderBottom = properties;
            break;
        case 2:
            element.style.borderBottom = properties;
            break;
    }
}

/*FORMULARIO DE CONTACTO*/
const inputContact = document.querySelectorAll(".input__verification");
contactForm(inputContact, 1);

/*FORMULARIO DE LOGIN*/
const inputLogin = document.querySelectorAll(".input__login");
contactForm(inputLogin, 2);


/*
  Basic Form Validation By Daniel Quintero Henriquez
  Challenge Alura Latam
  Oracle One Next Education
*/