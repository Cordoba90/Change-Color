//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let textField = document.querySelector(".textField")

button1.addEventListener("click" , () => {
   let colorIndex = Math.floor(Math.random() * colors.length) 
   document.body.style.backgroundColor = colors[colorIndex]

})

let hexColor = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]

button2.onclick = () => {
  let hexVladimir = "#"
  for (let index = 0; index < 6 ; index++) {
    hexVladimir = hexVladimir + hexColor[Math.floor(Math.random() * hexColor.length)]
      
  } 
  document.body.style.backgroundColor = hexVladimir
  textField.innerHTML = hexVladimir
}



//# 00ffff                 < ====   HEX KODU