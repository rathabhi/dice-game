
var var1=Math.floor(Math.random()*6)+1;
var var2=Math.floor(Math.random()*6)+1;
if(var1===1)
document.querySelector("img").setAttribute("src","images/1.png");
else if(var1===2)
document.querySelector("img").setAttribute("src","images/2.png");
else if(var1===3)
document.querySelector("img").setAttribute("src","images/3.png");
else if(var1===4)
document.querySelector("img").setAttribute("src","images/4.png");
else if(var1===5)
document.querySelector("img").setAttribute("src","images/5.png");
else if(var1===6)
document.querySelector("img").setAttribute("src","images/6.png");
if(var2===1)
document.querySelectorAll("img")[1].setAttribute("src","images/1.png");
else if(var2===2)
document.querySelectorAll("img")[1].setAttribute("src","images/2.png");
else if(var2===3)
document.querySelectorAll("img")[1].setAttribute("src","images/3.png");
else if(var2===4)
document.querySelectorAll("img")[1].setAttribute("src","images/4.png");
else if(var2===5)
document.querySelectorAll("img")[1].setAttribute("src","images/5.png");
else if(var2===6)
document.querySelectorAll("img")[1].setAttribute("src","images/6.png");



if(var1===var2)
{
    document.getElementsByTagName("h1")[0].innerHTML="Draw";
}
else if(var1>var2)
{
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins";
}