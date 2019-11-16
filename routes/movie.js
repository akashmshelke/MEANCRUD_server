const express = require('express');
const db = require('../db');
const utils = require('../utils');
const multer  = require('multer')
const upload = multer({ dest: 'images/' })

const router = express.Router();

router.get('/movies', (request, response) => {
    const connection = db.connect();
    const statement = `select * from movie`;
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.post('/movies', upload.single('image'),(request, response) => {
    const data = request.body;
 const fileName = request.file.filename;
 console.log(fileName);

    const connection = db.connect();
    const statement = `insert into movie(name, rating,description,image) values ('${data.name}',${data.rating},'${data.description}','${fileName}')`;
    connection.query(statement, (error, products) => {
        console.log(error);
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.put('/movies/:id', (request, response) => {
    const id = request.params.id;
    const data = request.body;
    const connection = db.connect();
    const statement = `update movie set name = '${data.name}',  rating = '${data.rating}', description = '${data.description}' where movieId = ${id}`;
    connection.query(statement, (error, products) => {
        console.log(error);
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.delete('/movies/:id', (request, response) => {
    const id = request.params.id;
    const connection = db.connect();
    const statement = `delete from movie where movieId = ${id}`;
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

router.get('/movies/:id', (request, response) => {
    const id = request.params.id;
    const connection = db.connect();
    const statement = `select * from movie where movieId = ${id}`;
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});

module.exports = router;
