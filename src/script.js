const catElement = document.getElementById("cat")

let catText = ""
fetch("/cat.txt")
  .then((response) => response.text())
  .then((foreignText) => {
    catText = foreignText
  })

let catHappyText = ""
fetch("/cat-happy.txt")
  .then((response) => response.text())
  .then((foreignText) => {
    catHappyText = foreignText
  })

fetch("https://api.ipify.org/")
  .then((response) => response.text())
  .then((ip) => {
    const ipAddressElement = document.getElementById("ip-address")
    ipAddressElement.innerText = ip
  })

const catHappy = (event) => {
  event.preventDefault()
  catElement.classList.add("grab")
  catElement.innerText = catHappyText
}

catElement.addEventListener("mousedown", catHappy)

const catNormal = (event) => {
  event.preventDefault()
  catElement.classList.remove("grab")
  catElement.innerText = catText
}

catElement.addEventListener("mouseup", catNormal)
catElement.addEventListener("mouseleave", catNormal)
catElement.addEventListener("mouseout", catNormal)
