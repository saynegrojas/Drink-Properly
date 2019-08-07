//--------------------------------
//      UI Class:             
//          Display menu
//          Add location to list
//          Select location
//          Clear fields
//          Validation
//--------------------------------

//const row = document.querySelector('tr');
class UI {

    //Display Menu
    static displayMenu(dayS, dayE) {
        //Set params as variables
        let
            dayStart = dayS,
            dayEnd = dayE;

        const menu = document.querySelector(".menu");
        const card_body = document.createElement('card-body');

        card_body.innerHTML = `
        <p>${dayStart}</p>
        <p>${dayEnd}</p>
        `
        menu.appendChild(card_body);
        //hours
        //drinks
        //appetizers
    }

    //Add Location and pass in place, zip 
    static addLocationToList(location, postalCode) {

        let locations = location;
        let postalCodes = postalCode;

        //grab element search-list from the DOM
        const list = document.querySelector('#search-list');

        //create a new row that holds all tr
        const row = document.createElement('tr');

        //add columns to table
        row.innerHTML = `
        <td>${locations}</td>
        <td>${postalCodes}</td>
        <td <a href="#" class="btn btn-outline-success btn-xs-2 select"></a>Select</td>
        `;
        //append rows to the list
        list.appendChild(row);
    }

    //Select Location
    static selectLocation(element) {
        if (element.classList.contains('select')) {

            //targets the parentelement of class (delete) which is <td>
            //We need to remove the whole row, so another parentElement which is <tr>
            //element.parentElement.parentElement.remove();
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

    // }
    //Validate input fields
    //place: not necessary
    if (zip === '') {
        UI.validateMessage('PLEASE ENTER A ZIP CODE', 'danger');
    } else {
        //Clears input fields when submit is clicked
        UI.clearFields();
    }
});
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

//EVENT: Select row location to menu
//Target search-list 
document.querySelector('#search-list').addEventListener('click', e => {

    //Click to target an element
    console.log(e.target);
    UI.selectLocation(e.target);
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
                    //grab the whole row from the DOM
                    const row = document.querySelector('tr');
                    for (var j = 0; j <= data.length - 1; j++) {
                        //Go through data to match zip codes with input zip codes
                        if (data[j]["zip_code"] != postal_code) {
                            //validatation
                            UI.validateMessage("COMING SOON....", "info");
                        } else {
                            for (var i = 0; i <= data.length - 1; i++) {
                                //query variable
                                let results = data[i];

                                //Grab variables and store into variables
                                let
                                //location
                                    nameOfPlace = results["place_name"],
                                    zipCodes = results["zip_code"],
                                    //days
                                    dayStarts = results["day_start"],
                                    dayEnds = results["day_end"],
                                    //hours
                                    hourStart = results["hour_start"],
                                    hourEnd = results["hour_stop"],
                                    //drinks
                                    drink1Name = results["drink1_name"],
                                    drink1Price = results["drink1_price"],
                                    drink2Name = results["drink2_name"],
                                    drink2Price = results["drink2_price"],
                                    //appetizers
                                    appetizer1Name = results["appetizer1_name"],
                                    appetizer1Price = results["appetizer1_price"],
                                    appetizer2Name = results["appetizer2_name"],
                                    appetizer2Price = results["appetizer2_price"],
                                    //coords
                                    lats = results["lat"],
                                    lngs = results["lng"],
                                    coords = { lat: lats, lng: lngs };

                                //Call functions

                                //This function gets the values from db and adds to the table
                                UI.addLocationToList(nameOfPlace, zipCodes);

                                //Displays Menu to card
                                UI.displayMenu(dayStarts, dayEnds);

                                //adds markers for locations 
                                addMarker(coords);
                            }
                        }
                    }
                });
            }
        }
    });
};
//---------------------------END RESULTS----------------------------------------