import { Validations } from "../Services/validations.js";

const genres = (data) => {
    const content = `<div class="carrousel__articles">
    <div class="carrousel__articles___title">
         <h3 class="carrousel__articles___title__h3">${Validations.firstLetterMayus(data)}</h3>
         <a class="carrousel__articles___link" href="view__All.html?genres=all">Ver Todo ➜</a>
    </div>
   <div class="carrousel__articles___post" id="${data}">
   </div>
</div>`;

    const section = document.createElement("section");
    section.classList.add("container");
    section.innerHTML = content;

    document.querySelector("#articles__carrousel").appendChild(section);
}

const article = (article, genres) => {
    const div = document.querySelector(`#${genres}`);
    const articleElement = document.createElement("article");
    const content = `<img class="carrousel__articles___item__img" src="${article['image']}" alt="imagen-promocional-${article['name']}">
                         <p>${Validations.firstLetterMayus(article["name"])}</p>
                         <p>$ ${article['price']}</p>
                         <a class="carrousel__articles___link" href="./view__Products.html?id=${article['id']}">Ver Producto</a>`;

    articleElement.classList.add("carrousel__articles___item");

    div.appendChild(articleElement);
    articleElement.innerHTML = content;
}

const crud = (data) => {
    const container = document.querySelector(".carrousel__articles___post");
    data.forEach(element => {
        const article = document.createElement("article");
        const template = `<div class="edit__item___btn-container">
             <div class="edit__item___btn-content">
             <a href="?delete=${element["id"]}">
                 <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="#21A8C1"/>
                 </svg>
             </a>
             <a href="add__Products.html?edit=${element["id"]}">
                 <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z" fill="#21A8C1"/>
                 </svg>
             </a>
         </div>
    </div>
    <img class="carrousel__articles___item__img" src="${element["image"]}" alt="imagen-promocional-${element["name"]}">
    <p>${Validations.firstLetterMayus(element["name"])}</p>
    <p><strong>$${element["price"]}</strong></p>
    <small>${element["id"]}</small>`;

        article.classList.add("carrousel__articles___item");
        article.innerHTML = template;
        container.appendChild(article);
    });
}

const inputs__FormEditProduct = (data) => {
    document.querySelector("#name__product").value = data[0]["name"];
    document.querySelector("#price__product").value = data[0]["price"];
    document.querySelector("#description__product").value = data[0]["description"];
    document.querySelector("#category__product").value = data[0]["genres"];
}

const contruct__articleData = (id, name, price, description, genrer, image) => {
    const article = {
        "idArt": id,
        "nombreArt": name,
        "priceArt": price,
        "descripcionArt": description,
        "generoArt": genrer,
        "imagenArt": image
    };
    return article;
}

export const Helpers = {
    article,
    crud,
    inputs__FormEditProduct,
    contruct__articleData,
    genres
};