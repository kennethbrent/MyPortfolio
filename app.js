const path = require('path');
const data = require('./data.json')
const express = require('express');
const pug = require('pug');
const app = express();


//Setup static directory to serve
const publicDirectoryPath = path.join(__dirname, '/public')
console.log(publicDirectoryPath)
app.use(express.static(publicDirectoryPath))

app.set('view engine', 'pug')

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/about', (req,res)=>{
    res.render('about')
})

app.get('/project/:id', (req,res)=>{
    res.render('project')
})

app.listen(3000, () => {
    console.log('Mf server is live')
})