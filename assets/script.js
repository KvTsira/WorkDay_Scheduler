//cal the jQuary event when the DOM is loaded
$().ready(function () {
    main();
});


//group the functions we want to run when the page loads
function main (){
    //call function to show the time
    showCurrentTime();
    
    //call function to color the grid
    colorCodeRows();    

    //call function to get the schedule information from the local storage
    getScheduleData();

    //refresh the page on every minute
    setTimeout("main()",10000);
}


//get current date and time using the moment web API
function showCurrentTime() {
    $("#currentDay").text("The page was refreshed on " + moment().format("MMMM Do, h:mm a"));
}

//color the grid
function colorCodeRows() {
    //get currrent hour
    var currentHour=moment().format("H"); //24 hour time 0..23

    //loop through elements with the same class "description"  using each() method
    $(".description").each(function() {
        //compare the ID value with currentHour to determine the coloring
        //ID is a string, convert that to integer
        var gridHour=parseInt($(this).attr("id"));
        //comparte the hours and apply classes accordingly
        if (gridHour == currentHour){
            $(this).addClass("present");
        }
        else if (gridHour < currentHour) {
            $(this).addClass("past");
        }
        else {
            $(this).addClass("future");
        }
    })
}

//get the schedule information from the local storage
function getScheduleData() {
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
}

//save schedule user input
function save() {
    //get time and decription to save to local storage
    var theTime = $(this).siblings(".description").attr("id");
    var theDescription = $(this).siblings(".description").val();
    localStorage.setItem(theTime, theDescription);
}

//add onlick event to the button
$(".saveBtn").on("click", save);





