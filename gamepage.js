// random value generated
var y = Math.floor(Math.random() * 10 + 1);

playername= localStorage.getItem("player_name");
// counting the number of guesses
// made for correct Guess
var guess = 1;
  
function submit(){
  
// number guessed by user     
var x = document.getElementById("guessField").value;
var y = Math.floor(Math.random() * 10+1);
if(x == y)
{    
    alert("Congratualations"  + " " + playername  + " " + "You guessed it right in" + guess + "guess");
}
else if(x > y) 
{    
  guess ++ ;
  alert("OOPS! Try a Smaller number");
}
else
{
    guess ++ ;
    alert("OOPS! Try a greater number");
}
}
function playAgain(){
   y = Math.floor(Math.random() * 10+1);
}