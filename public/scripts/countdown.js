
const targetDate = new Date("Jun 27, 2025 00:01:00").getTime();


const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;


    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


    document.getElementById("timer").innerHTML = 
        `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds until:`;


    if (timeLeft < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "LAN IS BACK BABY!";
    }
}, 1000);
