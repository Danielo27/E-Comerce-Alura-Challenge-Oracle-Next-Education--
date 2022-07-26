const apiURL = `http://localhost:3000/`;

const uploadFile = (files) => {
    const url = `http://localhost:5500/upload`;
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:5500/upload");
    request.send(files);
}

const getApi = (request) => {
    const url = `${apiURL}${request}`;
    return fetch(url).then((response) => response.json());
}

const deleteApi = (request, article) => {
    return fetch(`${apiURL}${request}/${article}`, {
        method: "DELETE"
    })
}

const setProducts = (request, article) => {

    const id = article["idArt"];
    const name = article["nombreArt"];
    const price = article["priceArt"];
    const description = article["descripcionArt"];
    const genres = article["generoArt"];
    const image = article["imagenArt"];

    return fetch(`${apiURL}${request}`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ id, name, price, description, genres, image })
    });
}

const putProducts = (request, article) => {

    const id = article["idArt"];
    const name = article["nombreArt"];
    const price = article["priceArt"];
    const description = article["descripcionArt"];
    const genres = article["generoArt"];
    const image = article["imagenArt"];

    return fetch(`${apiURL}${request}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, price, description, genres, image })
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
}

export const Services = {
    getApi,
    deleteApi,
    setProducts,
    putProducts,
    uploadFile
};