document.getElementById("changeColorBtn").addEventListener("click",function(){
    const colors = ["#ff6666","#66b3ff","#99ff99","#ffcc66"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
});

let timerInterval;

document.getElementById("start-button").addEventListener("click", function () {
    const minutesInput = document.getElementById("minutes-input").value;
    let timeRemaining = parseInt(minutesInput) * 60;

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    clearInterval(timerInterval); // Clear any existing timer
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById("time").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        } else {
            timeRemaining--;
        }
    }, 1000);
});

document.getElementById("reset-button").addEventListener("click", function () {
    clearInterval(timerInterval);
    document.getElementById("time").textContent = "00:00";
    document.getElementById("minutes-input").value = "";
});

function startTimerWithMinutes(minutes) {
    clearInterval(timerInterval); // Clear any existing timer
    let timeRemaining = minutes * 60;

    // Immediately update the display to show the selected time
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    document.getElementById("time").textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    timerInterval = setInterval(() => {
        const mins = Math.floor(timeRemaining / 60);
        const secs = timeRemaining % 60;
        document.getElementById("time").textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        console.log(`Time updated to: ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`); // Debugging log

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        } else {
            timeRemaining--;
        }
    }, 1000);
}

// Add event listeners for preset buttons
document.getElementById("3mins").addEventListener("click", () => startTimerWithMinutes(3));
document.getElementById("4mins").addEventListener("click", () => startTimerWithMinutes(4));
document.getElementById("5mins").addEventListener("click", () => startTimerWithMinutes(5));
document.getElementById("6mins").addEventListener("click", () => startTimerWithMinutes(6));
document.getElementById("7mins").addEventListener("click", () => startTimerWithMinutes(7));
document.getElementById("10mins").addEventListener("click", () => startTimerWithMinutes(10));
