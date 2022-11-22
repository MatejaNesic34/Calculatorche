let x = 0;
let rez = 0;
function Kvadriraj() {
 rez = Math.pow(x, 2);
}
function Korenuj() {
 let a = Math.sqrt(x);
 rez = a.toFixed(3);
 if (rez - Math.floor(rez) == 0)
  rez = a;
}
function Ocisti() {
 document.getElementById("result").innerText = "0"
}
function Brisanje() {
 let screen = document.getElementById("result").innerText;
 rez = screen.slice(0, -1);
 Racunaj();
}
function Podeli() {
 //ovaja funkcija se koristi za deljenje 2 broja u kalkulatoru
}
function Pomnozi() {
 // mata nesic
}
function Saberi() {
 //ja si ovdeka kucam i ova funkcija sabira brojovi
}
function Oduzmi() {
 //ovo dji oduzima
}
function Racunaj() {
 document.getElementById("result").innerText = rez;

}
function Decimala() {
 document.getElementById("result").innerText += ".";

}
function Jedan() {
 if (document.getElementById("result").innerText == "0") {
  document.getElementById("result").innerText = 1;
  x = document.getElementById("result").innerText;
 }

 else {
  document.getElementById("result").innerText += 1;
  x = document.getElementById("result").innerText;
 }
}
function Dva() {
 if (document.getElementById("result").innerText == "0") {
  document.getElementById("result").innerText = 2;
  x = document.getElementById("result").innerText;
 }
 else {
  document.getElementById("result").innerText += 2;
  x = document.getElementById("result").innerText;
 }
}
function Tri() {
 if (document.getElementById("result").innerText == "0") {
  document.getElementById("result").innerText = 3;
  x = document.getElementById("result").innerText;
 }
 else {
  document.getElementById("result").innerText += 3;
  x = document.getElementById("result").innerText;
 }
}
function Cetiri() {
 if (document.getElementById("result").innerText == "0") {
  document.getElementById("result").innerText = 4;
  x = document.getElementById("result").innerText;
 }
 else {
  document.getElementById("result").innerText += 4;
  x = document.getElementById("result").innerText;
 }
}
function Pet() {
 if (document.getElementById("result").innerText == "0") {
  document.getElementById("result").innerText = 5;
  x = document.getElementById("result").innerText;
 }
 else {
  document.getElementById("result").innerText += 5;
  x = document.getElementById("result").innerText;
 }
}
function Sest() {
 if (document.getElementById("result").innerText == "0") {
  document.getElementById("result").innerText = 6;
  x = document.getElementById("result").innerText;
 }
 else {
  document.getElementById("result").innerText += 6;
  x = document.getElementById("result").innerText;
 }
}
function Sedam() {
 if (document.getElementById("result").innerText == "0") {
  document.getElementById("result").innerText = 7;
  x = document.getElementById("result").innerText;
 }
 else {
  document.getElementById("result").innerText += 7;
  x = document.getElementById("result").innerText;
 }
}
function Osam() {
 if (document.getElementById("result").innerText == "0") {
  document.getElementById("result").innerText = 8;
  x = document.getElementById("result").innerText;
 }
 else {
  document.getElementById("result").innerText += 8;
  x = document.getElementById("result").innerText;
 }
}
function Devet() {
 if (document.getElementById("result").innerText == "0") {
  document.getElementById("result").innerText = 9;
  x = document.getElementById("result").innerText;
 }
 else {
  document.getElementById("result").innerText += 9;
  x = document.getElementById("result").innerText;
 }
}
function Nula() {
 if (document.getElementById("result").innerText == "0") {
  document.getElementById("result").innerText = 0;
  x = document.getElementById("result").innerText;

 }
 else {
  document.getElementById("result").innerText += 0;
  x = document.getElementById("result").innerText;
 }
}