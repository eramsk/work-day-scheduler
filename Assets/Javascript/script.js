
//display current day and date 
var today = moment().format("dddd MMMM Do YYYY"); 

$("#currentDay").text(today); //display current day and date 

//entries for each hour

var planWorkDay = [ 
    {time:"9.00 AM" , event:""},
    {time:"10.00 AM" , event:""},
    {time:"11.00 AM" , event:""},
    {time:"12.00 PM" , event:""},
    {time:"1.00 PM" , event:""},
    {time:"2.00 PM" , event:""},
    {time:"3.00 PM" , event:""},
    {time:"4.00 PM" , event:""},
    {time:"5.00 PM" , event:""},
];

//check local storage
var workEvents = JSON.parse(localStorage.getitem("work-day"));
if(workEvents) {
    planWorkDay = workEvents;
}

//check current day
$("#currentDay").text(today);


//create rows for the planner
planWorkDay.forEach(function (timeBlock, index) {
    var timeLabel = timeBlock.time;
    var blockColor = colorRow(timeLabel);
    var row = '<div class="time-block" id="' +
    index +
    '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
    timeLabel +
    '</div><textarea class="form-control ' +
    blockColor +
    '">' +
    timeBlock.event +
    '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

    //adding rows to container

    $(".container").append(row);
});

//color rows based on current time

var now = moment().format("H A");

function(colorRow(time)) {
    var planNow = moment(now, "E J");
    var planEntry = moment(time, "E J");
    if(planNow.isBefore(planEntry)=== true) {
        return "future";
    } else if (planNow.isAfter(planEntry)=== false) {
        return "past";
    } else {
        return "present";
    }
    }







