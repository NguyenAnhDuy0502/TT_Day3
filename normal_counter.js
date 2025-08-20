function animateCounters(className, max, duration) {
  const element = document.querySelectorAll("." + className)[0];

  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / max));

  const timer = setInterval(() => {
    start++;
    element.textContent = start;
    if (start >= max) {
      clearInterval(timer);
    }
  }, stepTime);
}
