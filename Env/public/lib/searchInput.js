const btnSearch = document.querySelector("#btnSearch");
const inputElement = document.querySelector('[name="search"]');

btnSearch.addEventListener("click", () => {
    const input = document.querySelector('[name="search"]').value;
    const articles = document.querySelectorAll(".carrousel__articles___item");
    const title = document.querySelectorAll(".carrousel__articles___title");

    if (!input == "") {
        title.forEach(element => {
            element.style.display = "none";
        })
    } else {
        title.forEach(element => {
            element.style.display = "flex";
        })
    }

    articles.forEach(article => {
        let title = article.childNodes[2].innerHTML;

        if (title == "") {
            title = article.childNodes[4].innerHTML;
        }

        if (title.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
            article.style.display = "block";
        } else if (input == "") {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    })
})


/*
Daniel Quintero Henriquez
Challenge Alura Latam
Oracle One Next Education*/