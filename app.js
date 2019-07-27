//request is a npm library to handle api request.
const request = require('request')

//DARKSKY API is used to fetch weather info . check docs .
const url = "https://api.darksky.net/forecast/fb8e38383b3231d48dc13441cab28386/37.8267,-122.4233?units=si"

//request accepts two args , first one is about the url and stuff and second arg is about what to do after recieving the data from api.
// json : true automatically parses the json data recieved from api . If we don't use json: true then we have to manually parse the data first.
request({url : url , json : true } , (error,response) => {

    //either we have a error or a response . 
    if(error){
        console.log("Cannot access Weather API")
    }

    //let's say if we enter a location without a latitude , then response object returns a on object with wrror property .
    else if(response.body.error){
        console.log("Unable to find location")
    }

    else{
        console.log(response.body.currently.temperature)
    }
})



