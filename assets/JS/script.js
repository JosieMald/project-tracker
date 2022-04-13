// DOM ELEMENTS


// VARIABLES


setInterval(function(){
    var currentDate = moment().format('MMM Do YYYY, h:mm:ss a');
    $('#date-time').text(currentDate);
    // $('#date-time').text("");
    console.log(currentDate);
}, 1000);

