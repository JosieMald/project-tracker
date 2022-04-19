// DOM ELEMENTS
var addProjectBtn = $('#add-project-btn');
var daysLeft = $('#days-left');
var totalEarnings = $('#total-earnings');

// VARIABLES










$( function() {
    setInterval(function(){
        var currentDate = moment().format('MMM Do YYYY, h:mm:ss a');
        $('#date-time').text(currentDate);
    }, 1000);
    
    addProjectBtn.on('click', function(){
        dialog.dialog('open');
    });

    var dialog, form,
    projectName = $( "#project-name" ),
    projectType = $( "#project-type" ),
    rate = $( "#hourly-rate" ),
    dueDate = $('#due-date');
    // daysLeft = $('#days-left'),
    // totalEarnings = $('#total-earnings'),
    // allFields = $( [] ).add( projectName ).add( projectType ).add( rate ).add ( dueDate ).add( daysLeft ).add ( totalEarnings );

    $( "#due-date" ).datepicker();
    
    var dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 325,
        width: 350,
        modal: true,
        buttons: {
          "Add Project": addEntry,
          Cancel: function() {
            dialog.dialog( "close" );
          }
        },
        close: function() {
          form[ 0 ].reset();
        }
      });
      
    //   daysLeft = moment(dueDate).add(number, 'months').calendar(); 
    //   console.log(daysLeft);

    //   USER ENTRY INPUT --------------------------------------------------------------
    function addEntry() {
        
        
        if (projectName.val() != "" && rate.val() != "" && dueDate.val() != "" && projectType.val() != null) {
            var number = moment(dueDate.val(), "l").format("DDD");
            var today = moment().format("DDD");
            var daysRemaining = parseInt(number) - parseInt(today);
            totalEarnings = (parseInt(rate.val()) * 8) * parseInt(daysRemaining);
            $( "#user-input" ).append( "<tr>" +
            "<td>" + projectName.val() + "</td>" +
            "<td>" + projectType.val() + "</td>" +
            "<td>" + rate.val() + "</td>" +
            "<td>" + dueDate.val() + "</td>" +
            "<td>" + "in " + daysRemaining + " days" + "</td>" +
            "<td>" + "$ " + totalEarnings + "</td>" +
            "<td>" + "<button class='delete-btn'>" + "x" + "</button>" + "</td>" +
            "</tr>" );
              dialog.dialog( "close" );
              $('.delete-btn').click(function(){
                  $(this).parent().parent().remove();
                  console.log(this);
                })

    }
    return;
}




  var form = dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    addEntry();
  });
  });
  