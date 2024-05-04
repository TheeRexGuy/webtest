document.getElementById("bt").onclick=function(){
    document.getElementById("bt").style.display="none";
    document.getElementById("wndo").classList.add("out");
    document.getElementById("wndo").addEventListener("transitionend", function(){
        console.log('Transition Ended Idiot');
        document.getElementById("wndo").remove();
    })
    document.getElementById("thing").style.display="block";
}

let ad=document.getElementById("gs");
ad.volume=0.5;
let a, b, x, y, scr=0;
document.getElementById("box").addEventListener("click", function(){
    document.getElementById("sc").innerHTML=(scr++)+"";
    ad.currentTime=0;
    ad.play();
    x=Math.random()*30 + 10;
    a=Math.random()*80 + 10;
    b=Math.random()*80 + 10;
    document.getElementById("box").style.height=x+ "px";
    document.getElementById("box").style.width=x+ "px";
    document.getElementById("box").style.top=a+ "%";
    document.getElementById("box").style.left=b+ "%";
})