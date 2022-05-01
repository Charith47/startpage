function currentTime() {
    const date = new Date();
    let day = date.toLocaleDateString('en-US', { weekday: 'long' });
    let hour = date.getHours();
    let minute = date.getMinutes();

    let session = "AM";
    let greeting = '';

    // calculate greeting according to 24h clock
    if (hour < 12 && minute <= 59) greeting = 'おはよう';
    else if ((hour >= 12 && hour <= 17) && (minute <= 59)) greeting = 'こんにちは';
    else greeting = 'こんばんは'

    // convert to 12h clock
    if (hour === 0) hour = 12;
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    // prepend 0 for numbers less than 10
    hour = (hour < 10) ? `0${hour}` : hour;
    minute = (minute < 10) ? `0${minute}` : minute;

    const time = `${day} ${hour}:${minute} ${session}`
    document.getElementById('clock').innerHTML = time;
    document.getElementById('greeting').innerHTML = greeting;

    setTimeout(function () { currentTime() }, 1000);
}

currentTime();