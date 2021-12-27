//cal the jQuary event when the DOM is loaded
$().ready(function () {
    //get current date and time using the moment web API
    
    showCurrentTime();
    function showCurrentTime() {
        $("#currentDay").text(moment().format("MMMM Do, h:mm a"));
    }
    
    colorCodeRows();
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
});

//save schedule user input
function save() {
    //get time and decription to save to local storage
    var theTime = $(this).siblings(".description").attr("id");
    var theDescription = $(this).siblings(".description").val();
    localStorage.setItem(theTime, theDescription);
}

//add onlick event to the button
$(".saveBtn").on("click", save);