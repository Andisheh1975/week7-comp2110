// Exploring URL Hashes
import { split_hash } from "./util.js"

// allBooks is a global variable that will hold the array
// of books loaded from the JSON file
let allBooks = []

// loadData will load the JSON data using fetch
// and call redraw() when it is ready
const loadData = () => {
    fetch("https://en.wikipedia.org/wiki/Things_Fall_Apart")
  .then(response => response.json())
  .then(data => console.log(data));

}

// redraw is called whenever the page needs to be 
// updated, it calls the appropriate view function
const redraw = () => {




    document.getElementById("content".innerHTML= "Lorem Ipsum");
}
 
window.onload= redraw;

