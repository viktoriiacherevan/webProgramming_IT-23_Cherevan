var btnDay = document.getElementById("day");
var btnNigth = document.getElementById("night");

var daylink = document.getElementById("daylink");

btnDay.addEventListener("click", function () { dayNight(); });
btnNigth.addEventListener("click", function () { dayNight(); });

function dayNight()
{
    let dayTheme = "css/day.css";
    let darkTheme = "css/style.css";

    var currTheme = daylink.getAttribute("href");
    var theme = "";

    if(currTheme == dayTheme)
    {
      currTheme = darkTheme;
      theme = "dark";
     btnNigth.style.display = "none";
     btnDay.style.display = "block";
    }

    else
    {
      currTheme = dayTheme;
      theme = "day";
     btnNigth.style.display = "block";
     btnDay.style.display = "none";
    }

    daylink.setAttribute("href", currTheme);

}
