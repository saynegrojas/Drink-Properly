//--------------------------------
//      Location Class:       
//          Represents search input
//--------------------------------
class Location {
    constructor(place, zipCode) {
        //sets object (this) to what it is passed in
        this.place = place;
        this.zipCode = zipCode;
    }
}
//--------------------------------
//      UI Class:             
//          Display Location
//          Add Location
//--------------------------------
class UI {

    //DISPLAY LOCATION 
    static displayLocation() {
        //local storage for now
        //***** Will set to database later *****/
        //Array of places with zip code
        const StoredLocation = [{
            place: "Applebees",
            zipCode: "92563"
        }, {
            place: "Chili's",
            zipCode: "92455"
        }];

        //instance of StoredLocation
        const locations = StoredLocation;

        //loop through StoredLocation array
        locations.forEach(location => UI.addLocationToList(location));
    }

    //ADD LOCATION
    //call addLocationToList function and pass in all the ojbects from StoredLocation
    static addLocationToList(location) {

        //grab element search-list from the DOM
        const list = document.querySelector('#search-list');

        //create a new row that holds all the constructor object in tr
        const row = document.createElement('tr');

        //add columns to table
        //****Might not need delete button ***//
        row.innerHTML = `
        <td>${location.place}</td>
        <td>${location.zipCode}</td>
        <td><a href="#" class="btn btn-outline-danger btn-xs-2 delete">x</a></td>
        `;

        //append rows to the list
        list.appendChild(row);
    }

    //DELETE LOCATION
    static deleteLocation(element) {
        if (element.classList.contains('delete')) {

            //targets the parentelement of class (delete) which is <td>
            //We need to remove the whole row, so another parentElement which is <tr>
            element.parentElement.parentElement.remove();
        }
    }

    //CLEAR FIELDS
    //clearFields function clears the input fields
    static clearFields() {
        document.querySelector('#place').value = '';
        document.querySelector('#zip-code').value = '';
    };

    //SHOW VALIDATION MESSAGE
    static validateMessage(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#search-form');
        container.insertBefore(div, form);
        //Set timeout so it does not stay on the screen
        //set for 3s
        setTimeout(() => document.querySelector('.alert').remove(),
            3000);
    };
};
//---------------------------END OF UI CLASSS----------------------------------


//--------------------------------
//      Show Map:             
//          initMap
//          markers
//--------------------------------
var map;
var service;
var infoWindow;

function initMap() {
    //Initialize variables

    var myLocation = new google.maps.LatLng(33.9746973, -117.33756599351244);

    var map = {
        zoom: 8,
        center: myLocation,
        mapTypeId: 'roadmap',
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    }
    map = new google.maps.Map(document.getElementById("googleMap"), map);
    //console.log(map);

    //Current Location Marker
    var marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        title: 'Hi!'
    });
}

//---------------------------END SHOW MAP--------------------------------------

//--------------------------------
//      Store class: 
//          handles storage
//--------------------------------



//--------------------------------
//      Events: 
//          display location
//          Add location
//          Remove location
//--------------------------------

//EVENT: DISPLAY LOCATION 
document.addEventListener("DOMContentLoaded", UI.displayLocation, initMap);

//EVENT: ADD LOCATION
document.querySelector('#search-form').addEventListener('submit', e => {
    //prevent actual submit
    e.preventDefault();

    //get form values
    //const place = document.querySelector('#place').value;
    const zip = document.querySelector('#zip-code').value;

    // var coords = getLatLng(zip);

    // console.log(coords);
    //Make ajax call
    
   //place/textsearch/json?query=restaurant
   //var coords = getLatLng(zip);
   //console.log(coords)

    // $.when(getLatLng(zip)).then(function(data){
    //     //console.log(getRestaurants());
    //         console.log(data);
            
    //         // let lats = lat;
    //         // let long = lng;
    //         // getRestaurants(lats, long);
            
    //         });


    $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=AIzaSyBP54kpmrFby0vkOHXhz8C2FHpH35IKJ54`,
        type: "GET",
        success: function(data){
            //Grab LAT and LNG to create markers for map
            console.log(data);
            postalCode = (data["results"][0]["address_components"][0]["long_name"]);
            //console.log(data["results"][0]["geometry"]["location"]["lat"]);
            let lat = (data["results"][0]["geometry"]["location"]["lat"]);
            //console.log(data["results"][0]["geometry"]["location"]["lng"]);
            let lng = (data["results"][0]["geometry"]["location"]["lng"]);
            console.log(`lat: ${lat} lng: ${lng}`);
            let coords = {lat: lat, lng: lng}
            console.log(coords);

            //getting our api 
            if(zip == postalCode){
                $.get('/api/all', function(data){
                    for(var j = 0; j <= data.length -1; j++){
                        if(data[j]["zip_code"] != zip){
                            console.log("We do not have any around that zip code");
                        } else {
                            for(var i = 0; i <= data.length -1; i++) {
                                // if(data){
        
                                // }
        
                            //place
                            //console.log(data[i]["place_name"]);
                            console.log(`${data[i]["place_name"]}`);
                            //days
                            console.log(`Days: ${data[i]["day_start"]} - ${data[i]["day_end"]}`);
                            //console.log(data[i]["day_end"]);
                            //hours
                            console.log(`Hours: ${data[i]["hour_start"]}pm - ${data[i]["hour_stop"]}pm`);
                            //console.log(data[i]["hour_stop"]);
                            
                            //drinks
                            console.log("Drink Specials: ");
                            
                            console.log(`${data[i]["drink1_name"]} ----- $${data[i]["drink1_price"]}`);
                            console.log(`${data[i]["drink2_name"]} ----- $${data[i]["drink2_price"]}`);
                            // console.log(data[i]["drink1_name"]);
                            // console.log(data[i]["drink1_price"]);
                            // console.log(data[i]["drink2_name"]);
                            // console.log(data[i]["drink2_price"]);
                            //appetizers
                            console.log("Appetizers: ");
                            console.log(`${data[i]["appetizer1_name"]} ----- $${data[i]["appetizer1_price"]}`);
                            console.log(`${data[i]["appetizer2_name"]} ----- $${data[i]["appetizer2_price"]}`);
                            
                            // console.log(data[i]["appetizer1_name"]);
                            // console.log(data[i]["appetizer1_price"]);
                            // console.log(data[i]["appetizer2_name"]);
                            // console.log(data[i]["appetizer2_price"]);
                            }
                        }
                        }
                    })
                    
                    

            }
            /*
appetizer1_name: "Loaded Nachos"
appetizer1_price: "3.00"
appetizer2_name: "Chicken Fingers"
appetizer2_price: "3.00"
day_end: "Friday"
day_start: "Monday"
drink1_name: "Bud Light"
drink1_price: "2.00"
drink2_name: "Coors Light"
drink2_price: "2.00"
hour_start: "03:00:00"
hour_stop: "05:00:00"
id: 1
lat: 33.9394264
lng: -117.2991714
place_name: "Buffalo Wild Wings"
type: "restaurant"
zip_code: 92553 */
    //         $.ajax({
    //             url:  `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1000&type=restaurant&key=AIzaSyBP54kpmrFby0vkOHXhz8C2FHpH35IKJ54`,
    //             type: 'GET',
    //             success: function(result){
    //                 console.log(result);
    //             }
    //         });
    //         // let rest = getRestaurants(lat, lng);
    //         // console.log(rest);
            
    // //         // $.each(data["results"][0]["address_components"],
    // //         //     function(key, value) {
    // //         //         if (value["types"][0] == "postal_code") {
    // //         //             console.log(value["long_name"]);
    // //         //         }
    // //         //     });
    //     }
    // });

    //Gets nearby restaurants from input zipcode 

// function getRestaurants(coords){
//     let coordinate = coords;
    
//     $.ajax({
//         url:  `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinate}&radius=1000&type=restaurant&key=AIzaSyBP54kpmrFby0vkOHXhz8C2FHpH35IKJ54`,
//         type: "GET",
//         success: function(data){
//             console.log(data);
//         }
//     })
// }

// $.ajax({
//     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=AIzaSyBP54kpmrFby0vkOHXhz8C2FHpH35IKJ54`,
//     type: "GET",
//     success: function(data){
//         //console.log(data["results"][0]["geometry"]["location"]["lat"]);
//         let lat = (data["results"][0]["geometry"]["location"]["lat"]);
//         //console.log(data["results"][0]["geometry"]["location"]["lng"]);
//         let lng = (data["results"][0]["geometry"]["location"]["lng"]);
//         //console.log(`lat: ${lat} lng: ${lng}`);
//         latLng = {lat: lat, lng: lng}
//         //console.log(latLng);
        
//         return latLng;
//         conosle.log(getRestaurant(latLng));
//     }
// });

// function getLatLng(zip) {
//     let postalCode = zip;
//     console.log(postalCode);
    
//     $.ajax({
//         url: `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&key=AIzaSyBP54kpmrFby0vkOHXhz8C2FHpH35IKJ54`,
//         type: "GET",
//         success: function(data){
//             //console.log(data["results"][0]["geometry"]["location"]["lat"]);
//             let lat = (data["results"][0]["geometry"]["location"]["lat"]);
//             //console.log(data["results"][0]["geometry"]["location"]["lng"]);
//             let lng = (data["results"][0]["geometry"]["location"]["lng"]);
//             //console.log(`lat: ${lat} lng: ${lng}`);
//             latLng = {lat: lat, lng: lng}
//             console.log(latLng);
            
        }
    });


// }
    //Validate input fields
    //place: place === ''
    if (zip === '') {
        UI.validateMessage('Please fill in all fields', 'danger');
    } else {

        //Once we get a value, need to instanciate value from Search class
        const location = new Location(place, zip);
        //OUR ZIPCODE WE WILL MATCH WITH GOOGLE'S ZIP CODE
        //console.log(location.zipCode);

        //Call addLocationToList and pass in (location) contains class Location which is attached to UI
        UI.addLocationToList(location);

        //call clearFields, clears input fields when submit is clicked
        UI.clearFields();
    }
});

//EVENT: REMOVE LOCATION
//target search-list 
document.querySelector('#search-list').addEventListener('click', e => {
    //click to target an element
    console.log(e.target);
    UI.deleteLocation(e.target);
});

//---------------------------END EVENTS----------------------------------------




