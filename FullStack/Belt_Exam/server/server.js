const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8000;
const cors = require('cors');


require('./config/mongoose.config')

app.use(cors(), express.json(), express.urlencoded({extended : true}));

const AllMyPetRoutes = require("./routes/pet.routes");
AllMyPetRoutes(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );