document.addEventListener("DOMContentLoaded", () => {
    const setAlarmBtn = document.getElementById("setAlarm");
    const timeDisplay = document.querySelector(".time-display");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const ampmEl = document.getElementById("ampm");

    const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");
        ampmEl.textContent = ampm;
    };

    setInterval(updateTime, 1000);

    setAlarmBtn.addEventListener("click", () => {
        alert("Alarm Set!");
    });
});
