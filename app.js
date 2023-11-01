const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');

const { port } = require('./config');
const PORT = process.env.PORT || port;

//Express Routes Import
const CandidateRoutes = require('./candidates/routes.js');

// Sequelize model imports
const CandidateModel = require('./common/models/Candidate');

app.use(cors());
app.use(express.json());

const sequelize  = new Sequelize({
  dialect: "sqlite",
  storage: "./storage/data.db",
})

CandidateModel.initialize(sequelize);

sequelize
  .sync()
  .then(() => {
    console.log("Sequelize Initialized!");

    app.use("/api/v1/candidates", CandidateRoutes);
    
    app.listen(PORT, () => {
      console.log('Server listing on PORT: ', port)
    })
  })
  .catch((err) => {
    console.error("Sequelize Initialization threw an err", err);
  })


/*app.get('/status', (request, response) => {
    const status = {
      'Status': 'Running'
    };
    
    response.send(status);
});*/