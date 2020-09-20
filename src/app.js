const path = require('path')

const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app = express()

//define paths for express config
const pubDirPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// setup handlebars engine and views location
app.set('views',viewPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(pubDirPath))

app.get('',(req,res) =>
{
    res.render('index', {

        title:'Weather',
        name: 'Pierre'
    })


})
app.get('/about',(req,res) =>
{
    res.render('about', {

        title:'about',
        name: 'Pierre'
    })


})
app.get('/help',(req,res) =>
{
    res.render('help', {
        helptext: 'this is some helpful text',
        title:'help',
        name: 'Pierre'
    })


})
app.get('/help*',(req,res)=>
{
    res.render('404page', {
        title:'404 Help article not found',
        name: 'Pierre'

   })
})

app.get('/weather',(req,res)=>
{
    res.send({
        temp: 12,
        precip: '0%'
    })
})

app.get('*',(req,res)=>
{
   
   res.render('404page', {
        title:'404 page not found!',
        name: 'Pierre'

   })
})

app.get('*',(req,res)=>
{
   res.send('404 page not found!')
})

app.listen(3000, () =>
{
    console.log('Server is up on port 3000.')


})