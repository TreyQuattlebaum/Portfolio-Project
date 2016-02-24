/*
Project Name: CitiPix
Client: GA Homework
Author: Trey Quattlebaum
Date: 01/16/2016
*/

// 1. User inputs city name or abbreviation in to input field.
// 2. User intializes search via submit button.
// 3. Button activates function to search for possible matches.
// 4. If city name or abbreviation matches; "New York","New York City",or"NYC" the background image changes to the city's sky line.
// 5. If city name or abbreviation matches; "San Francisco","SF",or"Bay Area" the background image changes to the city's sky line.
// 6. If city name or abbreviation matches; "Los Angeles","LA",or"LAX" the background image changes to the city's sky line.
// 7. If city name or abbreviation matches; "Autsin",or"ATX" the background image changes to the city's sky line.
// 8. If city name or abbreviation matches; "Sydney",or"SYD" the background image changes to the city's sky line.



// // --------------Experimental extras to autofill input form-----------------------
 $(function() {  var cityNames = ["New York","New York City","NYC","San Francisco","SF","Bay Area","Los Angeles","LA","LAX","Autsin","ATX","Sydney","SYD"];
    $("#city-type").autocomplete({source:cityNames});
  });
// ---- The autocomplete work. However, I was unable to get the drop menu styled correctly.
// ---- If you mouse over the choices will appear. 

function imageChange() {
	var city = $("#city-type").val();
  if (city === "New York" || city=== "New York City" ||city=== "NYC") {
    $("body").addClass("nyc");
  } else if (city === "San Francisco" ||city === "SF" ||city === "Bay Area") {
    $("body").addClass("sf");
  } else if (city === "Los Angeles" ||city === "LA" ||city === "LAX") {
    $("body").addClass("la");
  } else if (city === "Austin" ||city === "ATX") {
    $("body").addClass("austin");
  } else if (city === "Sydney" ||city === "Syd") {
    $("body").addClass("sydney");
  } else {
    alert("City Pic Not Found");
  }
}
$("#submit-btn").click(function(event){
  event.preventDefault();
  imageChange()

});
