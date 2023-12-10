
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
if(workEvents)=


