// DOM ELEMENTS
var addProjectBtn = $("#add-project-btn");
var daysLeft = $("#days-left");
var totalEarnings = $("#total-earnings");

// VARIABLES
var emptyRow =
  "<tr><td colspan=12 class='text-center'> No Current Entries </td></tr>";

$(function () {
  $("#user-input").append(emptyRow);
  // MOMENT JS DATE DISPLAY INTERVAL --------------------------------------------------------------
  setInterval(function () {
    var currentDate = moment().format("MMM Do YYYY, h:mm:ss a");
    $("#date-time").text(currentDate);
  }, 1000);

  addProjectBtn.on("click", function () {
    dialog.dialog("open");
  });

  var dialog,
    form,
    projectName = $("#project-name"),
    projectType = $("#project-type"),
    rate = $("#hourly-rate"),
    dueDate = $("#due-date");

  // DIALOG POP UP BOX --------------------------------------------------------------
  var dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 325,
    width: 350,
    modal: true,
    buttons: {
      "Add Project": addEntry,
      Cancel: function () {
        dialog.dialog("close");
      },
    },
    close: function () {
      form[0].reset();
    },
  });

  //   USER ENTRY INPUT --------------------------------------------------------------
  $("#due-date").datepicker();
  function addEntry() {
    $("#tips").removeClass("validateTips");
    if (
      projectName.val() != "" &&
      rate.val() != "" &&
      dueDate.val() != "" &&
      projectType.val() != null
    ) {
      if ($("#user-input").children().children().length == 1) {
        $("#user-input").html("");
      }
      var number = moment(dueDate.val(), "l").format("DDD");
      var today = moment().format("DDD");
      var daysRemaining = parseInt(number) - parseInt(today);
      totalEarnings = parseInt(rate.val()) * 8 * parseInt(daysRemaining);
      $("#user-input").append(
        "<tr>" +
          "<td>" +
          projectName.val() +
          "</td>" +
          "<td>" +
          projectType.val() +
          "</td>" +
          "<td>" +
          rate.val() +
          "</td>" +
          "<td>" +
          dueDate.val() +
          "</td>" +
          "<td>" +
          "in " +
          daysRemaining +
          " days" +
          "</td>" +
          "<td>" +
          "$ " +
          totalEarnings +
          "</td>" +
          "<td>" +
          "<button class='delete-btn'>" +
          "x" +
          "</button>" +
          "</td>" +
          "</tr>"
      );
      dialog.dialog("close");
      //   DELETE ENTRY ROWS BTN --------------------------------------------------------------
      $(".delete-btn").click(function () {
        $(this).parent().parent().remove();
        if ($("#user-input").children().children().length == 0) {
          $("#user-input").append(emptyRow);
        }
      });
    } else {
      $("#tips").addClass("validateTips");
    }
    return;
  }

  // DIALOG SUBMIT BUTTON --------------------------------------------------------------
  var form = dialog.find("form").on("submit", function (event) {
    event.preventDefault();
    addEntry();
  });
});
