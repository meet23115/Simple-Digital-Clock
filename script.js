function showTime(){
    let mydate = new Date();

    let weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = mydate.getDay();

    let date = mydate.getDate();

    let yearMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = mydate.getMonth();

    let year = mydate.getFullYear();

    let hour = mydate.getHours();
    let min = mydate.getMinutes();
    let sec = mydate.getSeconds();
    let session = '';

    // Conditions to convert 24 hours time to 12 hours time
    if(hour == 0){
        hour = 12;
        session = "AM";
    }
    else if(hour < 12){
        hour = hour;
        session = "AM";
    }
    else if(hour == 12){
        hour = 12;
        session = "PM";
    }
    else{
        // hour = hour - 12;
        hour -= 12;
        session = "PM";
    }


    // Conditions to add 0 if there is only one digit number
    /*  if(hour < 10){
            hour = '0' + hour;
        }
        else{
         hour = hour;
        } */

    hour = (hour < 10) ? '0' + hour : hour;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;
    date = (date < 10) ? '0' + date : date;

    let nameOfTheDay =`${weekDay[day]}`; 
    let fullDate = `${yearMonth[month]} ${date}, ${year}`;
    let time = `${hour}:${min}:${sec}`;
    let ampm = `${session}`;
    
    document.getElementById("day").innerHTML = nameOfTheDay;
    document.getElementById("fullDate").innerHTML = fullDate;
    document.getElementById("digitalClock").innerHTML = time;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(showTime);
}

showTime();








