const countDownDate = new Date().getTime() + 1000 * 60 * 30;

const countdownFunction = setInterval(function () {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = ("0" + days).slice(-2);
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);
