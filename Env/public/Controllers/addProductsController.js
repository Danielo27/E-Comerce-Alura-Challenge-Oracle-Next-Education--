import { Helpers } from "../Services/helpers.js";
import { Services } from "../Services/services.js";
import { Validations } from "../Services/validations.js";

const btnAddProducts = document.querySelector("#add__products");
const ProductEdit = Validations.urlParams("edit");

if (!ProductEdit == "") {
    Services
        .getApi(`articulos?id=${ProductEdit}`)
        .then((data) => Helpers.inputs__FormEditProduct(data))
        .catch((err) => { throw new Error(`WARN ${err}`) })
}

btnAddProducts.addEventListener('click', () => {
    let formState = true;

    const name = document.querySelector("#name__product").value;
    if (Validations.limitString(name, 20) == false) {
        alert("Warn Name Product Is Incorrect");
        formState = false;
    }

    const price = document.querySelector("#price__product").value;
    if (Validations.limitString(price, 1000) == true) {
        if (Validations.isNumber(price) == false) {
            alert("Warn Price Is Incorrect");
            formState = false;
        }
    } else {
        alert("Warn Price Is Incorrect");
        formState = false;
    }

    const description = document.querySelector("#description__product").value;
    if (Validations.limitString(description, 150) == false) {
        alert("Warn Description is Incorrect");
        formState = false;
    }

    const genrerIn = document.querySelector("#category__product").value;
    if (Validations.limitString(genrerIn, 10) == false) {
        alert("Warn genrer is incorrect");
        formState = false;
    }

    const img = `assets/img/${document.querySelector('[name="imagen"]').files[0]["name"]}`;


    if (!formState == false) {
        if (!ProductEdit == "") {
            const article = Helpers.contruct__articleData(ProductEdit, name, price, description, genrerIn, img);
            Services
                .putProducts("articulos", article);
        } else {
            const article = Helpers.contruct__articleData(uuid.v4(), name, price, description, genrerIn, img);
            Services
                .setProducts("articulos", article)
                .then(() => console.log("correcto"))
                .catch(error => console.log(error));

            const input = document.querySelector('[name="imagen"]').files[0];
            var imagen = new FormData();
            imagen.append("imagen", input);
            Services
                .uploadFile(imagen);
        }
        alert("SUCESS Product Add Succesfully");
        window.location.href = `crud.html?success`;
    }
});


/*
Daniel Quintero Henriquez
Challenge Alura Latam
Oracle One Next Education*/