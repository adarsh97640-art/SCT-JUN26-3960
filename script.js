let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;
let lapCount = 1;

function updateDisplay() {
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    document.getElementById("display").innerText =
        `${h}:${m}:${s}`;
}

function startStopwatch() {
    if (!running) {
        running = true;

        timer = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    running = false;
}

function resetStopwatch() {
    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;
    running = false;
    lapCount = 1;

    updateDisplay();

    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (hours === 0 && minutes === 0 && seconds === 0)
        return;

    const lapTime =
        document.getElementById("display").innerText;

    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount}: ${lapTime}`;

    document.getElementById("laps").appendChild(li);

    lapCount++;
}

updateDisplay();