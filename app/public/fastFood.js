/* global moment */

// When user clicks add-btn
$("button").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newFf = {
    rest: $("#rest").val(),
    rating: $("#rating").val()
    
  };

  console.log(newFf);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newFf)
    // On success, run the following code
    .then(function() {

      

    });

  // Empty each input box by replacing the value with an empty string
  
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

if (data.length !== 0) {

    for (var i = 0; i < data.length; i++)
    {
        $("table").append("<tr><td>" + data[i].restaraunt + "</td>" + "<td>" + data[i].rating +
        "</td>" + "</tr>" )
    }  
}

});
