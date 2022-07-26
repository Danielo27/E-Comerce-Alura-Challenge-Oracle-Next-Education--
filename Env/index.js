console.log(`
    ==================================================================
    =============|ALURA GEEK CHALLENGE__SPRINT 3 FRONTEND|=============
    ==================================================================

    INICIANDO...
`);

/*INITIALIZATIONS*/
const { json, request, response } = require('express');
const server = require('express');
const db = require('json-server');
const multer = require('multer');

/*SETTINGS*/
const app = server();
const port = 5500;
const upload = multer({ dest: "public/assets/img/" });

const dbserver = db.create();
const router = db.router('public/db.json');
const middleware = db.defaults();
const dbPort = 3000;

const storage = multer.diskStorage({
    destination: 'public/assets/img',
    filename: (request, file, callback) => {
        callback(null, file.originalname);
    }
});

/*MIDDLEWARES*/
dbserver.use(middleware);
dbserver.use(router);

app.use(multer({
    storage,
    dest: 'public/assets/img'
}).single("imagen"));

/*ROUTES*/
app.post("/upload", (request, response) => {
    response.send("uploaded");
    console.log(response);
});

app.use(server.static('public/'));

/*DISPLAY*/
dbserver.listen(dbPort, () => { console.log(`API JSON CORRIENDO EN EL PUERTO ${dbPort}`); });
app.listen(port, () => { console.log(`EL SERVIDOR ESTA CORRIENDO EN EL PUERTO ${port}`); });
console.log(`MADE BY DANIEL QUINTERO HENRIQUEZ`);

/*
Daniel Quintero Henriquez
Challenge Alura Latam
Oracle One Next Education*/