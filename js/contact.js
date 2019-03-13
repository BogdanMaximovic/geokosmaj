$(document).ready(($) => {

    let currentDate = new Date();
    let weekday = [];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentDay = weekday[currentDate.getDay()];

    let currentTimeHours = currentDate.getHours();
    currentTimeHours = currentTimeHours < 10 ? "0" + currentTimeHours : currentTimeHours;
    let currentTimeMinutes = currentDate.getMinutes();
    let timeNow = currentTimeHours + "" + currentTimeMinutes;

    let currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
    $(currentDayID).toggleClass("today"); //this works at hightlighting today

    let openTimeSplit = $(currentDayID).children('.opens').text().split(":");

    let openTimeHours = openTimeSplit[0];
    openTimeHours = openTimeHours < 10 ? "0" + openTimeHours : openTimeHours;

    let openTimeMinutes = openTimeSplit[1];
    let openTimex = openTimeSplit[0] + openTimeSplit[1];

    let closeTimeSplit = $(currentDayID).children('.closes').text().split(":");

    let closeTimeHours = closeTimeSplit[0];
    closeTimeHours = closeTimeHours < 10 ? "0" + closeTimeHours : closeTimeHours;

    let closeTimeMinutes = closeTimeSplit[1];
    let closeTimex = closeTimeSplit[0] + closeTimeSplit[1];

    if (timeNow >= openTimex && timeNow <= closeTimex) {
        $(".openorclosed").toggleClass("open");
    } else {
        $(".openorclosed").toggleClass("closed");
    }
})