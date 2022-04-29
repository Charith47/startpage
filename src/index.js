setTimeout(() => {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let session = "AM";
    console.log(typeof hour);

    if (hour === 0) hour = 12;
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? `0${hour}` : hour;
    minute = (minute < 10) ? `0${minute}` : minute;

    const time = `${hour}:${minute} ${session}`
    document.getElementById('clock').innerHTML = time;
    console.log(time)
}, 1000);