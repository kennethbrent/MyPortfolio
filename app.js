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

app.get('/project/:id', (req,res, next)=>{
    const projectID = req.params.id;
    const projectData = data.projects[projectID]
    if(!projectData){
        const err = new Error('Page not found');
        err.status = 404;
        return next(err)
    }
    res.render('project', {projectData})
})

//catch 404 and render error page
app.use((req, res, next) => {
    const err = new Error('Page not found.')
    err.status = 404;
    next(err);
})

app.use(function (err, req, res, next) {
    console.log(err.message)
    res.render('error', {
        status: err.status,
        error: err.message,
        stack: err.stack
    })
  })


app.listen(3000, () => {
    console.log('Mf server is live')
})