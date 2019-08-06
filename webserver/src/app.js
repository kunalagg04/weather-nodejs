//we want to fetch path of index.html . use path module for that
const path = require('path')

const express = require('express')
//express is basiclly a function with buch of methods

const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

//hbs is used for dynamic rendering 
const hbs = require('hbs')

//dirname gives address of current file
console.log(__dirname)

//path is a module which combines two paths to reach a targeted folder
console.log(path.join(__dirname,'../public'))
const publicDirectoryPath = path.join(__dirname,'../public');

//


const app = express()

//it is used to render static content to webste like html css images
app.use(express.static(publicDirectoryPath))

//it is used to set views folder 
//we can customise path according to our convinience
app.set('views', path.join(__dirname, '../views'));

//It is used wheb we want  to render dynamic content .
//We use te,plating for dynamic contemt
//Handlebars is a library used for that.
//bUT we use hbs which makes setting up handlebar on express easy af
app.set('view engine','hbs')

//partials are reusable pieces of code like footers and headers
hbs.registerPartials(path.join(__dirname,'../views/partials'))

//get is used when we have to set routes
// Takes two args --> The name of route --> What needs to be sended on that route
//Route arg is a callback func which takes tow args --> request --> response .

//we can use title in index view as well as in a partial used in index view.
app.get('' , (req , res) => {
    res.render('index' , {
        title : 'Weather App'
    })
})

//returning HTML
app.get('/weather' , (req , res) => {
    res.send("<h1>OOlala</h1>")
})


//returning JSON . We need to just return object or array . It is automatically stringified
app.get('/about' , (req , res) => {
    res.send([{
        name : "Kunal"
    },
    {
        name:"Priyanshu"
    }])
})


//in this we have static data we'll replce it with data from api
//query string
// app.get('/return',(req,res) => {
//     if(!req.query.address){
//         return res.send( "please enter a place")
//     }

//     return res.send({
//         location : req.query.address,
//         weather : "Sample"
//     })

    
// })

app.get('/return',(req,res) => {
    if(!req.query.address){
        return res.send({
            error: "Please enter a location"
        })
    }

    geocode(req.query.address , (error,data) => {
        if(error){
            return res.send({
                error : error
            })
        }

        forecast(data.latitude , data.longitude , (error,fdata) => {
            if(error){
                return res.send({
                    error: error
                })
            }
            
            res.send({
                location : data.location,
                weather : fdata

            })
           
            
        })
    })
})

//* is used to render 404 pages .
app.get('/about/*' , (req,res) => {
    res.send("help not found")
})

app.get('*',(req,res) => {
    res.send("Error 404")
})

//start server
//first argument is port and second is optional arg
app.listen(3000 , () => {
    console.log("Port 3000")
})