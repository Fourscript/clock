function getTime() {
    let date = new Date();

    let weekday = date.getDay();    //day of month (1-31)
    let day = date.getDate();   //monday, tuesday..
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds();

    let timePeriod = "AM";

    let timezone = date.getTimezoneOffset();

    switch(0 < h || h <= 23) { 
        //0 < h <= 23
        case (h == 0):
            h = 12;
            break;
        case (h < 10): // 0-9
            h = "0" + h;
            break;
        case (h < 13): //10-12
            break;
        default:
            h = h % 12;
            timePeriod = "PM";
            break;
    }
    
    switch(weekday) {
        case (0): {
            weekday = "Sunday";
            break;
        }
        case (1): {
            weekday = "Monday";
            break;
        }
        case (2): {
            weekday = "Tuesday";
            break;
        }
        case (3): {
            weekday = "Wednesday";
            break;
        }
        case (4): {
            weekday = "Thursday";
            break;
        }
        case (5): {
            weekday = "Friday";
            break;
        }
        case (6): {
            weekday = "Saturday";
            break;
        }
    }

    m = (m < 10 ? "0" + m : m);
    s = (s < 10 ? "0" + s : s);
    ms = (ms < 100 ? "0" + ms : ms);

    // future improvement, add all of the timezones to object
    var timezoneString = {
        240 : "EDT",
        300 : "EST",
        420 : "PDT",
        480 : "PST",
    };

    var now = date.toString() + "\n\n" + "(" + month + "/" + day + "/" + year + ")" + "\n" + weekday + "\n" + h + ":" + m + ":" + s + " " + timePeriod + " " + timezoneString[timezone];

    document.querySelector("#clock").innerText = now;
}

window.onload = getTime;
setInterval(getTime, 100);