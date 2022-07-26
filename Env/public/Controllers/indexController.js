import { Services } from "../Services/services.js";
import { Validations } from "../Services/validations.js";
import { Helpers } from "../Services/helpers.js";

let maxLimitElements = 6;

window.addEventListener('load', function() {
    Services //CALL THE GENRES
        .getApi("generos")
        .then((data) => {
            data.forEach(data => {
                Helpers.genres(data);

                Services //CALL THE ARTICLES FOR GENRES
                    .getApi(`articulos?genres=${data}`)
                    .then((articles) => {
                        let count = 0;
                        articles.forEach(articleContent => {
                            if (count < maxLimitElements) {
                                Helpers.article(articleContent, data);
                                count++;
                            }
                        })
                    })
                    .catch((error) => console.log(`WARN ${error}`));
            });
        })
        .catch((error) => console.log(`WARN ${error}`));
});


/*
Daniel Quintero Henriquez
Challenge Alura Latam
Oracle One Next Education*/