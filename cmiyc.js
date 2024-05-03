document.getElementById("bt").onclick=function(){
    document.getElementById("wndo").style.display="none";
}

let a, b;
document.getElementById("box").addEventListener("mouseover", function(){
    a=Math.random()*80 + 10;
    b=Math.random()*80 + 10;
    document.getElementById("box").style.top=a+ "%";
    document.getElementById("box").style.left=b+ "%";
})