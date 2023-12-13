
//display current day and date 
var today = moment().format("dddd MMMM Do YYYY"); 

$("#currentDay").text(today); //display current day and date 

//entries for each hour

var planWorkDay = [ 
    {time:"9 AM" , event:""},
    {time:"10 AM" , event:""},
    {time:"11 AM" , event:""},
    {time:"12 PM" , event:""},
    {time:"1 PM" , event:""},
    {time:"2 PM" , event:""},
    {time:"3 PM" , event:""},
    {time:"4 PM" , event:""},
    {time:"5 PM" , event:""},
];

//check local storage
var workEvents = JSON.parse(localStorage.getItem("work-day"));
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

var now = moment().format("E J");

function colorRow(time) {
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

// save the event 
$(".saveBtn").on("click", function() {
	var blockID = parseInt(
		$(this)
			.closest(".time-block")
			.attr("id")
	);
	var userEntry = $.trim(
		$(this)
			.parent()
			.siblings("textarea")
			.val()
	);
	planWorkday[blockID].event = userEntry;

	/* Set local storage */
	localStorage.setItem("workDay", JSON.stringify(planWorkday));
});






