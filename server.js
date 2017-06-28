const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name',mainCtrl.getName);
app.get('/location',mainCtrl.getLocation);
app.get('/occupations',mainCtrl.getOccupations);
app.get('/occupations/latest',mainCtrl.getOccupationsLatest);
app.get('/hobbies',mainCtrl.getHobbies);
app.get('/hobbies/:type',mainCtrl.getHobbiesType);
app.get('/family',mainCtrl.getFamily);
app.get('/family/:gender',mainCtrl.getFamilyGender);

app.listen(3000,()=>console.log('Listening on port 3000...'));