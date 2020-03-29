const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
* GET: Buscar/listar.
* Post: Criar.
* Put: Alterar.
* Delete: Deletar.
*/

/**
 * Parâmetros:
 * 
 * Query: São nomeados na rota após "?" (Filtros/
 * Paginação)
 * Route: Identificam recursos
 * Request Body: Corpo da requisição, criar/alterar
 * recursos (informar/alterar email/senha)
 */

app.listen(3333);