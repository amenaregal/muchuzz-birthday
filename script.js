const waitingScreen = document.getElementById("waiting-screen");
const revealScreen = document.getElementById("reveal-screen");
const mainContent = document.getElementById("main-content");

// 🎯 Aug 5, 2025 at 12:00 AM
const releaseTime = new Date("2025-08-05T00:00:00").getTime();
const previewMode = false; // 🔁 Set to false later!


function updateCountdown() {
    
  const now = new Date().getTime();
  const distance = releaseTime - now;

  if (previewMode || distance <= 0) {  // 👈 modified this line
    waitingScreen.style.display = "none";
    revealScreen.classList.remove("hidden");
  } else {
    // Countdown display
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateCountdown, 1000);
  }
    
}


function showMainPage() {
  revealScreen.style.display = "none";
  mainContent.classList.remove("hidden");
  document.querySelector("audio").play();

  // 🎉 Launch confetti
  confetti({
    particleCount: 100,
    spread: 80,
    origin: { y: 0.6 }
  });

}
updateCountdown();
