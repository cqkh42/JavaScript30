const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours() % 12

  const secondsAngle = 90 + (6*seconds)
  const minAngle = 90 + (6*minutes) + (seconds / 10)
  const hourAngle = 90 + (30 * hours) + (minutes / 2)


  secondHand.style.transform = `rotate(${secondsAngle}deg)`
  minHand.style.transform = `rotate(${minAngle}deg)`
  hourHand.style.transform = `rotate(${hourAngle}deg)`
}

setInterval(setDate, 1000)
