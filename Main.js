console.log("Created canvas element");
const canva = document.createElement("canvas");
canva.id = "canva";
const height = canva.height = 500;
const width = canva.width = 1000;
document.body.appendChild(canva);
const ctx = canva.getContext("2d");