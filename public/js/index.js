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
        <td><a href="#" class="btn btn-danger btn-xs delete">x</a></td>
        `;

        //append rows to the list
        list.appendChild(row);
    }
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
//EVENT: display Location
document.addEventListener("DOMContentLoaded", UI.displayLocation);

//EVENT: Add location
document.querySelector('#search-form').addEventListener('submit', e => {
    //prevent actual submit
    e.preventDefault();

    //get form values
    const place = document.querySelector('#place').value;
    const zip = document.querySelector('#zip-code').value;

    //Once we get a value, need to instanciate value from Search class
    const location = new Location(place, zip);
    console.log(location);

    //Call addLocationToList and pass in (location) contains class Location which is attached to UI
    UI.addLocationToList(location);
});