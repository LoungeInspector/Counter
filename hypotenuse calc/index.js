let count = 0;

document.getElementById("decreaseBut").onclick = function(){
    count-=1;
    document.getElementById("numberLabel").innerHTML = count;
}

document.getElementById("resetBut").onclick = function(){
    count=0;
    document.getElementById("numberLabel").innerHTML = count;
}

document.getElementById("increaseBut").onclick = function(){
    count+=1;
    document.getElementById("numberLabel").innerHTML = count;
}