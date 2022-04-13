// DOM ELEMENTS
var dateTimeEl = $('#date-time');

// VARIABLES
var currentDate = moment().format('MMM Do YYYY, h:mm:ss a');

$('#date-time').text(currentDate);