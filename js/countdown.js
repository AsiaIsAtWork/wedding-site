// Countdown Timer
let weddingDate = new Date("Jun 29, 2023 18:30:00").getTime();

let countdownTimer =  setInterval(function() {
    // Retrieve today's date and time
    let now = new Date().getTime();

    // Distance between now and wedding date
    let distance = weddingDate - now;

    // Time calculations
    let dayCount = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hourCount = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuteCount = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondCount = Math.floor((distance % (1000 * 60)) / 1000);

    // Display countdown result
    document.getElementById("days").innerHTML = dayCount;
    document.getElementById("hours").innerHTML = hourCount;
    document.getElementById("minutes").innerHTML = minuteCount;
    document.getElementById("seconds").innerHTML = secondCount;

    // On day of write text date confirmation text
    
    
    // If countdown is up, remove counter and display updated text
})