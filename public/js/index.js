//--------------------------------
//      UI Class:             
//          Display menu
//          Add location to list
//          Select location
//          Clear fields
//          Validation
//--------------------------------
var lineItems = [];

class UI {

    //Display Menu
    static displayMenu(j) {
        console.log(j);

        //Set params as variables
        let k = lineItems[j];
        let
            namePlace = k.place_name,
            dayStart = k.day_start,
            dayEnd = k.day_end,
            hourStart = k.hour_start,
            hourEnd = k.hour_stop,
            drink1Name = k.drink1_name,
            drink1Price = k.drink1_price,
            drink2Name = k.drink2_name,
            drink2Price = k.drink2_price,
            appetizer1Name = k.appetizer1_name,
            appetizer1Price = k.appetizer1_price,
            appetizer2Name = k.appetizer2_name,
            appetizer2Price = k.appetizer1_price;

        /**appetizer1_name: "Loaded Nachos"
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
lng: -117.2764969
place_name: "Buffalo Wild Wings"
type: "restaurant"
zip_code: 92553 */
        //let newHourStart = hourStart.slice(1, 5);
        //let newHourEnd = hourEnd.slice(1, 5);
        //console.log(newHourStart)
        //grab menu class to append data inside card, card-body

        const menu = document.querySelector(".menu");
        const card_body = document.createElement('card-body');

        card_body.innerHTML = `
            <p class="text-center">${namePlace}</p>
            <p class="text-center">Weekly</p>
            <p class="text-center">${dayStart} - ${dayEnd}</p>
            <p class="text-center">Hours</p>
            <p class="text-center">${hourStart}pm - ${hourEnd}pm</p>
            <p class="text-center"> DRINK SPECIALS </p>
            <p class="text-center">${drink1Name}_________$${drink1Price}</p>
            <p class="text-center">${drink2Name}_________$${drink2Price}</p>
            <p class="text-center">APPETIZER SPECIALS</p>
            <p class="text-center">${appetizer1Name}_________$${appetizer1Price}</p>
            <p class="text-center">${appetizer2Name}_________$${appetizer2Price}</p>
            `
            // menu.appendChild(card_body);
            //hours
            //drinks
            //appetize
            // if(card_body.length === 'undefined'){
            //     card_body.length == 'More coming soon'
            // }
        menu.appendChild(card_body);
    };

    //Add Location and pass in place, zip 
    static addLocationToList(nameOfPlaces, postalCode, dayStarts, dayEnds, hourStarts, hourEnds, drink1Names, drink1Prices, drink2Names, drink2Prices, appetizer1Names, appetizer1Prices, appetizer2Names, appetizer2Prices, j) {

        let nameOfPlace = nameOfPlaces;
        let postalCodes = postalCode;

        //grab element search-list from the DOM
        const list = document.querySelector('#search-list');

        //create a new row that holds all tr
        const row = document.createElement('tr');
        //row.id = "r_" + j.toString();
        row.onclick = function(e) {

            }
            //.addEventListener('click', function(){ alert('blah');}, false);

        $(row).data("nameOfPlaces", nameOfPlaces);
        $(row).data("dayStarts", dayStarts);
        $(row).data("dayEnds", dayEnds);
        $(row).data("hourStarts", hourStarts);
        $(row).data("hourEnds", hourEnds);
        $(row).data("drink1Names", drink1Names);
        $(row).data("drink1Prices", drink1Prices);
        $(row).data("drink2Names", drink2Names);
        $(row).data("drink2Prices", drink2Prices);
        $(row).data("appetizer1Names", appetizer1Names);
        $(row).data("appetizer1Prices", appetizer1Prices);
        $(row).data("appetizer2Names", appetizer2Names);
        $(row).data("appetizer2Prices", appetizer2Prices);


        //add columns to table
        row.innerHTML = `
        <td onclick="UI.showMenu(this)" id="r_` + j.toString() + `">${nameOfPlace}</td>
        <td>${postalCodes}</td>
        <td onclick="deleteLocation(this)" class="btn btn-outline-danger btn-lg delete">Don't like this place</td> 
        `;
        list.appendChild(row);
    }
    static showMenu(el) {
        console.log(el);
        console.log(lineItems);

        openNav();
        UI.displayMenu(parseInt(el.id.replace("r_", "")));
    }

    //Delect Location
    static deleteLocation(element) {
        if (element.classList.contains('delete')) {
            //targets the parentelement of class (delete) which is <td>
            //We need to remove the whole row, so another parentElement which is <tr>
            element.parentElement.remove();
        }
    }

    //Clears the input fields after clicking submit
    static clearFields() {
        document.querySelector('#place').value = '';
        document.querySelector('#zip-code').value = '';
    };

    //Show Validation Message when inputs are invalid
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
            3000)
    };
};

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
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
//Add marker console.log(coords);


function addMarker(coords) {
    var map = {
        zoom: 8,
        center: coords,
        mapTypeId: 'roadmap'
    }
    map = new google.maps.Map(document.getElementById("googleMap"), map);
    var marker = new google.maps.Marker({
        position: coords,
        map: map
            //loop through marker(s) 
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

//EVENT: Initiate Map on Load 
document.addEventListener("DOMContentLoaded", initMap);

//EVENT: Add location on submit
document.querySelector('#search-form').addEventListener('submit', e => {
    //Prevent actual submit
    e.preventDefault();
    $('.transform').toggleClass('transform-active');
    //Get form values
    const place = document.querySelector('#place').value;
    const zip = document.querySelector('#zip-code').value;

    //Call function and pass in zip code input
    getLatLng(zip);

    //Validate input fields
    //place: not necessary
    if (zip === '') {
        UI.validateMessage('Please enter a zip code', 'danger');
    } else {
        //Clears input fields when submit is clicked
        UI.clearFields();
    }
});
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

//EVENT: Select row location to menu
//Target search-list 
document.querySelector('#search-list').addEventListener('click', e => {
    console.log("11");

    e.preventDefault();
    //Set key, value target to variables
    // let
    //     nOP = $(e.target).data("nameOfPlaces"),
    //     dS = $(e.target).data("dayStarts"),
    //     dE = $(e.target).data("dayEnds"),
    //     hS = $(e.target).data("hourStarts"),
    //     hE = $(e.target).data("hourEnds"),
    //     d1N = $(e.target).data("drink1Names"),
    //     d1P = $(e.target).data("drink1Prices"),
    //     d2N = $(e.target).data("drink2Names"),
    //     d2P = $(e.target).data("drink2Prices"),
    //     a1N = $(e.target).data("appetizer1Names"),
    //     a1P = $(e.target).data("appetizer1Prices"),
    //     a2N = $(e.target).data("appetizer2Names"),
    //     a2P = $(e.target).data("appetizer2Prices");

    //On click, delete whole row
    UI.deleteLocation(e.target);
    console.log("hi");

    //Call function and pass in all the values from data.(key, value)
    // UI.displayMenu(nOP, dS, dE, hS, hE, d1N, d1P, d2N, d2P, a1N, a1P, a2N, a2P);

});

//---------------------------END EVENTS----------------------------------------


//--------------------------------
//      Results from data: 
//          Init map
//          Display Menu
//          Add markers
//          Add data to table
//--------------------------------

//Function get lat and lng from zip code input by making an ajax call
function getLatLng(zip) {
    //Set parameter to variable 
    let postal_code = zip;
    $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${postal_code}&key=AIzaSyBP54kpmrFby0vkOHXhz8C2FHpH35IKJ54`,
        type: "GET",
        success: function(data) {
            //console.log(data);

            //Grab lat and lng to create markers for map

            //Set chosen data to variables 
            //zip, lat, lng
            postalCode = (data["results"][0]["address_components"][0]["long_name"]);
            let lat = (data["results"][0]["geometry"]["location"]["lat"]);
            let lng = (data["results"][0]["geometry"]["location"]["lng"]);

            //Getting our api 
            if (postal_code == postalCode) {
                $.get('/api/all', function(data) {
                    console.log(data);

                    //grab the whole row from the DOM
                    const row = document.querySelector('tr');
                    lineItems = data;
                    for (var j = 0; j < data.length - 1; j++) {
                        //Go through data to match zip codes with input zip codes
                        if (data[j]["zip_code"] != postal_code) {
                            UI.validateMessage("Coming Soon..", "info");
                            break;
                        } else {
                            let results = data[j];

                            //Grab variables and store into variables
                            let
                            //location
                                typeOfPlace = results["type"],
                                nameOfPlaces = results["place_name"],
                                zipCodes = results["zip_code"],
                                //days
                                dayStarts = results["day_start"],
                                dayEnds = results["day_end"],
                                //hours
                                hourStarts = results["hour_start"],
                                hourEnds = results["hour_stop"],
                                //drinks
                                drink1Names = results["drink1_name"],
                                drink1Prices = results["drink1_price"],
                                drink2Names = results["drink2_name"],
                                drink2Prices = results["drink2_price"],
                                //appetizers
                                appetizer1Names = results["appetizer1_name"],
                                appetizer1Prices = results["appetizer1_price"],
                                appetizer2Names = results["appetizer2_name"],
                                appetizer2Prices = results["appetizer2_price"],
                                //coords
                                lats = results["lat"],
                                lngs = results["lng"];
                            let coords = { lat: lats, lng: lngs };


                            //This function gets the values from db and adds to the table
                            UI.addLocationToList(nameOfPlaces, zipCodes, dayStarts, dayEnds, hourStarts, hourEnds, drink1Names, drink1Prices, drink2Names, drink2Prices, appetizer1Names, appetizer1Prices, appetizer2Names, appetizer2Prices, j);

                            //adds markers for locations 
                            addMarker(coords);
                        }
                    }
                });
            }
        }
    });
};
//---------------------------END RESULTS----------------------------------------