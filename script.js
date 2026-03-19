let display = document.getElementById("display");
let streak = 0;

// Add numbers/operators
function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = "";
  }

  display.innerText += value;

  // small animation
  display.style.transform = "scale(1.05)";
  setTimeout(() => {
    display.style.transform = "scale(1)";
  }, 100);
}

// Clear screen
function clearDisplay() {
  display.innerText = "0";
}

// Calculate result
function calculate() {
  try {
    let result = Function("return " + display.innerText)();
    display.innerText = result;

    streak++;
    updateStreak();

    playSound();
    showCelebration();
    confetti();
    shakeCalc();

  } catch (e) {
    display.innerText = "Error";
    streak = 0;
    updateStreak();
  }
}

// Update streak counter
function updateStreak() {
  let streakEl = document.getElementById("streak");
  if (streakEl) {
    streakEl.innerText = "🔥 Streak: " + streak;
  }
}

// Play click sound
function playSound() {
  let sound = document.getElementById("sound");
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }
}

// Shake calculator
function shakeCalc() {
  let calc = document.querySelector(".calculator");
  if (calc) {
    calc.classList.add("shake");
    setTimeout(() => {
      calc.classList.remove("shake");
    }, 300);
  }
}

// Confetti effect (NO BACKTICKS → no error)
function confetti() {
  for (let i = 0; i < 40; i++) {
    let c = document.createElement("div");
    c.className = "confetti";

    c.style.left = Math.random() * window.innerWidth + "px";

    // simple colors (safe)
    let colors = ["red", "yellow", "blue", "green", "pink", "orange"];
    c.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(c);

    setTimeout(() => {
      c.remove();
    }, 2000);
  }
}

// Show CONGRATS text
function showCelebration() {
  let msg = document.getElementById("celebration");

  if (msg) {
    msg.classList.add("show");

    setTimeout(() => {
      msg.classList.remove("show");
    }, 2500);
  }
}