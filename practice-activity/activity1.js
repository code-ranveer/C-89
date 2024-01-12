function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "score: " + score;
}

function saveScore()
{
    localStorage.setItem("score", score);
}

function nextPage()
{
   window.location = "activit_2.html"; 
}