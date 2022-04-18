// DOM ELEMENTS
var addProjectBtn = $('#add-project-btn');
var deleteBtn = $('#delete-btn');

// VARIABLES
var i = 0;










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
    rate = $( "#rate" ),
    dueDate = $('#due-date'),
    daysLeft = $('#days-left'),
    totalEarnings = $('#total-earnings'),
    allFields = $( [] ).add( projectName ).add( projectType ).add( rate ).add ( dueDate ).add( daysLeft ).add ( totalEarnings ),
    tips = $( ".validateTips" );

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
          allFields.removeClass( "ui-state-error" );
        }
      });

    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }
 
    // function checkLength( o, n, min, max ) {
    //   if ( o.val().length > max || o.val().length < min ) {
    //     o.addClass( "ui-state-error" );
    //     updateTips( "Length of " + n + " must be between " +
    //       min + " and " + max + "." );
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
 
    // function checkRegexp( o, regexp, n ) {
    //   if ( !( regexp.test( o.val() ) ) ) {
    //     o.addClass( "ui-state-error" );
    //     updateTips( n );
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
  




  function addEntry() {
    var valid = true;
    allFields.removeClass( "ui-state-error" );
    // valid = valid && checkLength( name, "username", 3, 16 );
    // valid = valid && checkLength( email, "email", 6, 80 );
    // valid = valid && checkLength( password, "password", 5, 16 );
    
    // valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
    // valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
    // valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
    
    if ( valid ) {
        $( "#user-input" ).append( "<tr>" +
        "<td>" + projectName.val() + "</td>" +
        "<td>" + projectType.val() + "</td>" +
        "<td>" + rate.val() + "</td>" +
        "<td>" + dueDate.val() + "</td>" +
        "<td>" + daysLeft.val() + "</td>" +
        "<td>" + totalEarnings.val() + "</td>" +
        "<td>" + "<button class='delete-btn'>" + "x" + "</button>" + "</td>" +
        "</tr>" );
        dialog.dialog( "close" );
        $('.delete-btn').click(function(){
            $(this).parent().parent().remove();
            console.log(this);
        })
    }
    return valid;
}




  var form = dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    addEntry();
  });

//   $( "#create-user" ).button().on( "click", function() {
//     dialog.dialog( "open" );
  });
  