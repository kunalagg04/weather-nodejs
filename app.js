const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoia3VuYWxhZ2cwNCIsImEiOiJjanlsZGp6OHowNnRjM25ubzk3dDRsMTNuIn0.kywygU8bwoxrr2nG_VuX8w'


    request({ url:url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
            console.log("hi")
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode("new delhi", (error , data) => {
    console.log("Error : " + error)
    console.log(data)
})