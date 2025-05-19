import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our', 'my', 'your', 'his', 'her'];
let adj = ['great', 'fast', 'crazy', 'funny', 'dark', 'bright', 'silent', 'wild'];
let noun = ['raccoon', 'tiger', 'developer', 'pirate', 'ninja', 'robot', 'wizard', 'penguin'];

window.onload = function() {
  let textresult="";
  for(let i=0;i<pronoun.length;i++){
    for(let j=0;j<adj.length;j++){
      for(let z=0;z<noun.length;z++){
        textresult+=`${pronoun[i]}`+`${adj[j]}`+`${noun[z]}`+`.com`+"<br>";
      }
    }
  }
  document.querySelector(".textoDominio").innerHTML=textresult;
};
