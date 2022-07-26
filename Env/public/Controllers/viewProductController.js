import { Services } from "../Services/services.js";
import { Validations } from "../Services/validations.js";
import { Helpers } from "../Services/helpers.js";

const maxLimitElements = 6;

window.addEventListener("load", () => {
    const id = Validations.urlParams("id");
    let count = 0;
    if (!id == "") {
        Services
            .getApi(`articulos?id=${id}`)
            .then((data) => {
                //FIRST I GRAPH THE PRODUCT INFORMATION
                const product = document.querySelector("#product");
                data.forEach(element => {
                    product.innerHTML = `<img src="${element["image"]}" class="div__products___img" alt="imagen-productos-${element["name"]}">
                                     <div class="div__products__description">
                                              <h2 class="div__products__description__title">${Validations.firstLetterMayus(element["name"])}</h2>
                                              <p class="div__products__description__details"><strong>$${element["price"]}</strong></p>
                                              <p class="div__products__description__details">${element["description"]} </p>
                                       </div>`;

                    const carrouselTitle = document.querySelector(".carrousel__articles___title");
                    const carrouselItems = document.createElement("div");

                    carrouselItems.classList.add("carrousel__articles___post");
                    carrouselItems.setAttribute("id", element["genres"]);
                    carrouselTitle.insertAdjacentElement('afterend', carrouselItems);

                    //AND AFTER I START PRINTING CAROUSEL OF SIMILAR PRODUCTS
                    Services
                        .getApi(`articulos?genres=${element["genres"]}`)
                        .then((data) => data.forEach(element => {
                            if (count < maxLimitElements) {
                                Helpers.article(element, element["genres"]);
                                count++;
                            }
                        }))
                        .catch((err) => {
                            throw new Error(`WARN ${err}`);
                        })
                });
            })
            .catch((err) => {
                throw new Error(`WARN ${err}`);
            })
    } else {
        alert("WARN Product Not Found Error 404 ");
        window.location.href = "/index.html";
    }

})


/*
Daniel Quintero Henriquez
Challenge Alura Latam
Oracle One Next Education*/