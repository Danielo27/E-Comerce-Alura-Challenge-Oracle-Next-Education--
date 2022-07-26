import { Services } from "../Services/services.js";
import { Validations } from "../Services/validations.js";
import { Helpers } from "../Services/helpers.js";

window.addEventListener('load', () => {
    Services
        .getApi("articulos")
        .then((data) => {
            Helpers.crud(data);
        })
        .catch((err) => {
            throw new Error(`WARN ${err}`);
        })

    const btndelete = Validations.urlParams("delete");
    if (!btndelete == "") {
        Services
            .deleteApi("articulos", btndelete);
        window.location.href = `?success`;
    }
});


/*
Daniel Quintero Henriquez
Challenge Alura Latam
Oracle One Next Education*/