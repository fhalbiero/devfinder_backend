const express = require('express');
const mongose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongose.connect('mongodb+srv://omninistack:omnistack@cluster0-3vg4m.mongodb.net/week10?retryWrites=true&w=majority',
    {
       useNewUrlParser: true, 
       useUnifiedTopology: true
    }
);

//cors desbloquei acesso ao backend de endereços distintos
app.use(cors());
//use invoca a função para todas as rotas
app.use(express.json());

//importo minhas rotas
app.use(routes);

//metodos http: GET, POST, PUT, DELETE

//tipos de parametros
//QUERY PARAMS: request.query (filtros, ordenação, paginação, ...)
//ROUTE PARAMS: request.params (identificar um parametro na alteração ou remoção)
//BODY: request.body (dados para criação ou alteração de um registro)

//mongodb (não relacional) - utilizado para bancos com pouco relacionamento

app.listen(3333);