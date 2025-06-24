const updateClock = ()=>{

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = hours > 12 ? "AM" : "PM"
    
    hours = hours % 12

    hours = hours === 0 ? 12 : hours;

    hours = hours<10 ? "0" + hours : hours;

    minutes = minutes<10 ? "0" + minutes : minutes;

    seconds = seconds<10 ? "0" + seconds : seconds;
    

    let currentTime = ` ${hours} : ${minutes} : ${seconds} ${period} `;


    document.getElementById("clock").textContent = currentTime;
}

setInterval(updateClock, 1000);

updateClock()