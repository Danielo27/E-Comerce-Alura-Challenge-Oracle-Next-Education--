import { Services } from "../Services/services.js";
import { Validations } from "../Services/validations.js";
import { Helpers } from "../Services/helpers.js";

const request = Validations.urlParams("genres");

if (request == "all") {
    Services //CALL THE GENRES
        .getApi("generos")
        .then((data) => {
            Helpers.genres("Articulos");
            document.querySelector("#Articulos").style.flexWrap = "wrap";

            data.forEach(data => {
                Services //CALL THE ARTICLES FOR GENRES
                    .getApi(`articulos?genres=${data}`)
                    .then((articles) => {
                        articles.forEach(articleContent => {
                            Helpers.article(articleContent, "Articulos");
                        })
                    })
                    .catch((error) => console.log(`WARN ${error}`));
            });
        })
        .catch((error) => console.log(`WARN ${error}`));
} else if (!request == "") {
    Helpers.genres(request);
    document.querySelector(`#${request}`).style.flexWrap = "wrap";
    Services //CALL THE ARTICLES FOR GENRES
        .getApi(`articulos?genres=${request}`)
        .then((articles) => {
            articles.forEach(articleContent => {
                Helpers.article(articleContent, request);
            })
        })
        .catch((error) => console.log(`WARN ${error}`));

} else {
    alert(`WARN Resource not found 404`);
    window.location.href = "index.html";
}


/*
Daniel Quintero Henriquez
Challenge Alura Latam
Oracle One Next Education*/