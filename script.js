const lennyFaces = [
    "( ͡° ͜ʖ ͡°)",
    "¯\_(ツ)_/¯",
    "ᗒ ͟ʖᗕ",
    "^‿^",
    "(づ◔ ͜ʖ◔)づ",
    "(⌐■_■)",
    "ಠ_ಠ",
    "" //<---- This is needed
    //These are where the faces are stored
]

var number =  Math.floor((Math.random() * lennyFaces.length) + 1);
var face = document.getElementById("LennyText");
face.textContent = lennyFaces[number]

console.log(number)