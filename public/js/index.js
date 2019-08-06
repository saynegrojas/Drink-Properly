//--------------------------------
//      Location Class:       
//          Represents search input
//--------------------------------
class Location {
    constructor(zipCode) {
        //sets object (this) to what it is passed in
        //this.place = place;
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

//initizialize map
function initMap() {
    //Initialize variables
    var myLocation = new google.maps.LatLng(33.9746973, -117.33756599351244);
    //map options
    var map = {
        zoom: 8,
        center: myLocation,
        mapTypeId: 'roadmap'
    }
    map = new google.maps.Map(document.getElementById("googleMap"), map);

}

//Add marker 
function addMarker(coords){
    var map = {
        zoom: 8,
        center: coords,
        mapTypeId: 'roadmap'
    }
    map = new google.maps.Map(document.getElementById("googleMap"), map);
        var marker = new google.maps.Marker({
        position: coords,
        map: map
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

    //getLatLng(zip);
    getLatLng(zip);
    
// }
    //Validate input fields
    //place: place === ''
    if (zip === '') {
        UI.validateMessage('Please fill in all fields', 'danger');
    } else {

        //Once we get a value, need to instanciate value from Search class
        const location = new Location(zip);

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

function getLatLng(zip){
    let postal_code = zip;
    $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${postal_code}&key=AIzaSyBP54kpmrFby0vkOHXhz8C2FHpH35IKJ54`,
        type: "GET",
        success: function (data) {
            //Grab LAT and LNG to create markers for map
            //console.log(data);
            postalCode = (data["results"][0]["address_components"][0]["long_name"]);
            //console.log(data["results"][0]["geometry"]["location"]["lat"]);
            let lat = (data["results"][0]["geometry"]["location"]["lat"]);
            //console.log(data["results"][0]["geometry"]["location"]["lng"]);
            let lng = (data["results"][0]["geometry"]["location"]["lng"]);
            //console.log(`lat: ${lat} lng: ${lng}`);
            // let coords = { lat: lat, lng: lng }
            //console.log(coords);


            //call add marker to pass in lat and lng
            //addMarker(coords);


            //getting our api 
            if (postal_code == postalCode) {
                $.get('/api/all', function (data) {

                    console.log(data);
                    
                    for (var j = 0; j <= data.length - 1; j++) {
                        //go through api data if there is no zip code that match the input
                        if (data[j]["zip_code"] != postal_code) {
                            console.log("We do not have any around that zip code");
                        } else {
                            for (var i = 0; i <= data.length - 1; i++) {
        
                                
                                //place
                                console.log(`${data[i]["place_name"]}`);
                                //days
                                console.log(`Days: ${data[i]["day_start"]} - ${data[i]["day_end"]}`);
                                //hours
                                console.log(`Hours: ${data[i]["hour_start"]}pm - ${data[i]["hour_stop"]}pm`);
                                //drinks
                                console.log("Drink Specials: ");
                                console.log(`${data[i]["drink1_name"]} ----- $${data[i]["drink1_price"]}`);
                                console.log(`${data[i]["drink2_name"]} ----- $${data[i]["drink2_price"]}`);
                                //appetizers
                                console.log("Appetizers: ");
                                console.log(`${data[i]["appetizer1_name"]} ----- $${data[i]["appetizer1_price"]}`);
                                console.log(`${data[i]["appetizer2_name"]} ----- $${data[i]["appetizer2_price"]}`);

                                let lats = data[i]["lat"] 
                                let lngs = data[i]["lng"]
                                console.log(lngs);
                                
                                let coords = { lat: lats, lng: lngs }
                                if(coords){
                                    addMarker(coords);
                                }                                
                            }
                        }
                    }
                });
            }
        }
    });
};
