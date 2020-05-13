const buttons = document.querySelectorAll(".key")
buttons.forEach(item => item.addEventListener("mousedown", (e) => e.target.classList.add("playing")))
buttons.forEach(item => item.addEventListener("mousedown", (e) => play(e.target.dataset.key)))
buttons.forEach(item => item.addEventListener("transitionend", (e) => e.target.classList.remove("playing")));

function play (key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`)
  audio.currentTime = 0
  audio.play()
}

document.addEventListener("keydown", (e) => document.querySelector(`div[data-key="${e.which}"]`).classList.add("playing"))
document.addEventListener("keydown", (e) => play(e.which))
