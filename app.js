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
    const projects = data.projects
    res.render('index', {projects})
})

app.get('/about', (req,res)=>{
    res.render('about')
})

app.get('/project/:id', (req,res)=>{
    const projectID = req.params.id;
    const projectData = data.projects[projectID]
    res.render('project', {projectData})
})

app.listen(3000, () => {
    console.log('Mf server is live')
})