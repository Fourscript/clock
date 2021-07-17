function getTime() {
    let date = new Date();

    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds();
    
    let timePeriod = "AM";
   
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
    
    m = (m < 10 ? "0" + m : m);
    s = (s < 10 ? "0" + s : s);
    ms = (ms < 100 ? "0" + ms : ms);

    var now = month + "/" + day + "/" + year + "\n" + h + ":" + m + ":" + s + ":" + ms + " " + timePeriod;

    document.getElementById("ID").innerText = now;
}

window.onload = getTime;
setInterval(getTime, 100);