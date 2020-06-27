const lennyFaces = [
    "( ͡° ͜ʖ ͡°)",
    "¯\_(ツ)_/¯", //idk why it only shows ¯_(ツ)_/¯ instead of ¯\_(ツ)_/¯
    "ᗒ ͟ʖᗕ",
    "^‿^",
    "(づ◔ ͜ʖ◔)づ",
    "(⌐■_■)",
    "ಠ_ಠ",
    //These are where the faces are stored
]

var number =  Math.floor((Math.random() * lennyFaces.length) + 0);
var face = document.getElementById("LennyText");
face.textContent = lennyFaces[number]

console.log(`The Lenny Face number is number ${number + 1}!`)
