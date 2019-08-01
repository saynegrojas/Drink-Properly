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
        const StoredLocation = [
            {
                place: "Applebees",
                zipCode: "92563"
            }, {
                place: "Chili's",
                zipCode: "92455"
            }
        ];

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
    static deleteLocation(element){
        if(element.classList.contains('delete')){

            //targets the parentelement of class (delete) which is <td>
            //We need to remove the whole row, so another parentElement which is <tr>
            element.parentElement.parentElement.remove();
        }
    }
    
    //CLEAR FIELDS
    //clearFields function clears the input fields
    static clearFields(){
        document.querySelector('#place').value = '';
        document.querySelector('#zip-code').value = '';
    };

    //SHOW VALIDATION MESSAGE
    static validateMessage(message, className){
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


//SHOW MAP
function initMap() {
    //Default setup
    var latlng = new google.maps.LatLng(33.9746973, -117.33756599351244);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: 'roadmap'
    }
    map = new google.maps.Map(document.getElementById("googleMap"), myOptions);
    console.log(map);
}


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
    const place = document.querySelector('#place').value;
    const zip = document.querySelector('#zip-code').value;

    //Validate input fields
    if(place === '' || zip === '') {
        UI.validateMessage('Please fill in all fields', 'danger');
    } else {

    //Once we get a value, need to instanciate value from Search class
    const location = new Location(place, zip);
    console.log(location);
    
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