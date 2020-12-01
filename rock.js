var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var win = document.getElementById("win");
var array = ["Rock", "Scissors", "Paper"]
var btn = document.querySelectorAll("button");
var you = 0; 
var pc = 0;
var resultt = document.getElementById("resultt");
btn.forEach((l)=>{
  l.addEventListener("click", function(){
    uno.innerHTML = l.id;
    dos.innerHTML = random(array);
    if(uno.innerHTML == dos.innerHTML){
        win.innerHTML = "TIE";
  } else if(uno.innerHTML == "Rock" &&  dos.innerHTML=="Scissors"){
        win.innerHTML = "YOU WIN"; 
  } else if(uno.innerHTML == "Rock" && dos.innerHTML=="Paper"){
        win.innerHTML = "YOU LOSE"; 
  }  else if(uno.innerHTML == "Paper" &&    dos.innerHTML=="Scissors"){
        win.innerHTML = "YOU LOSE"; 
  }  else if(uno.innerHTML == "Paper" &&    dos.innerHTML=="Rock"){
        win.innerHTML = "YOU WIN"; 
  }  else if(uno.innerHTML == "Scissors" &&    dos.innerHTML=="Paper"){
        win.innerHTML = "YOU WIN"; 
  }  else if(uno.innerHTML == "Scissors" &&    dos.innerHTML=="Rock"){
        win.innerHTML = "YOU LOSE"; 
  } 
    var yourScore = document.getElementById("your-score")
    var pcScore = document.getElementById("pc-score")
    

    
    if(win.innerHTML == "YOU WIN"){
      you++;
      yourScore.innerHTML = "score " + you;
    }
    if(win.innerHTML == "YOU LOSE"){
      pc++;
      pcScore.innerHTML = "score " + pc;
    }
    if(you==5 || pc==5){
      if(you>pc){
        resultt.innerHTML = "YOU WIN"
      }  else{
        resultt.innerHTML = "YOU LOSE"
      }
      document.getElementById("thegame").style.display = "flex";
    }
    
  })
})



function random(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}