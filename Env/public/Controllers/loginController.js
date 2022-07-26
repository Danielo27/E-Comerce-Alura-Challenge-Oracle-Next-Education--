import { Services } from "../Services/services.js";
import { Validations } from "../Services/validations.js";

const btn = document.querySelector("#login");

btn.addEventListener("click", () => {
    const mail = document.querySelector("#email__login").value;
    const password = document.querySelector("#password__login").value;

    if (Validations.isMail(mail) == true) {
        if (Validations.isPassword(password) == true) {
            Services
                .getApi(`usuarios?correo=${mail}`)
                .then((data) => {
                    if (!data == "") {
                        if (mail == data[0]["correo"] && password == data[0]["password"]) {
                            window.location.href = `../crud.html?log=true`;
                        } else {
                            alert(`WARN this user or password is incorrect`);
                        }
                    } else {
                        alert(`WARN this user not exist`);
                    }
                })
                .catch((err) => console.log(`WARN ${err}`));
        } else {
            alert(`WARN password is incorrect`);
        }
    } else {
        alert(`WARN this mail is incorrect`);
    }
});


/*
Daniel Quintero Henriquez
Challenge Alura Latam
Oracle One Next Education*/