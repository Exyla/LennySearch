const lennyFaces = [
    "( ͡° ͜ʖ ͡°)",
    "¯\_(ツ)_/¯",
    "ᗒ ͟ʖᗕ",
    "^‿^",
    "(づ◔ ͜ʖ◔)づ",
    "(⌐■_■)",
    "ಠ_ಠ"
]

var number =  Math.floor((Math.random() * lennyFaces.length) + 1);
var face = document.getElementById("LennyText");
face.textContent = lennyFaces[number]