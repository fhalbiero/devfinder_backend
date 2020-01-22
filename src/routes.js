const { Router } = require('express');
const DevController = require('./controllers/DevControllers');
const SearchController = require('./controllers/SearchController');
//axios é utilizado para consumir apis externas

const routes = Router();

routes.get('/devs', DevController.index );

routes.post('/devs', DevController.store );

routes.put('/devs', DevController.update );

routes.delete('/devs/:id', DevController.destroy );

routes.get('/search', SearchController.index );


module.exports = routes;