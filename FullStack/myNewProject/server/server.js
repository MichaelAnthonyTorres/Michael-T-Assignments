const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );

const PersonController = require('./controllers/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
}
