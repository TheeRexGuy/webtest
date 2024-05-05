document.getElementById("bt").onclick=function(){
    document.getElementById("bt").style.display="none";
    document.getElementById("wndo").classList.add("out");
    document.getElementById("wndo").addEventListener("transitionend", function(){
        console.log('Transition Ended Idiot');
        document.getElementById("wndo").remove();
        document.getElementById("thing").style.display="block";
    });
}

let ad=document.getElementById("gs");
ad.volume=0.5;
let a, b, x, y, scr=0, t1=0, t2=0, avg=0, bst=Infinity;
document.getElementById("box").addEventListener("click", function(){
    if(scr%10==0)
        t2=new Date().getTime();
    document.getElementById("sc").innerHTML=(++scr)+"";
    ad.currentTime=0;
    ad.play();
    if((scr-1)%10==0)
        console.log(0);
    else{
    console.log(t2-t1);
    avg+=(t2-t1);
    }
    if(scr%10==0){
        avg/=8;
        if(avg<bst)
            bst=avg;
        document.getElementById("avg").innerHTML="Average: "+Math.round(avg)+"ms";
        document.getElementById("bst").innerHTML="Best: "+Math.round(bst)+"ms";
        avg=0;
    }
    x=Math.random()*30 + 10;
    a=Math.random()*80 + 10;
    b=Math.random()*80 + 10;
    document.getElementById("box").style.height=x+ "px";
    document.getElementById("box").style.width=x+ "px";
    document.getElementById("box").style.borderRadius=x+ "px";
    document.getElementById("box").style.top=a+ "%";
    document.getElementById("box").style.left=b+ "%";
    if(t2>0){
       t1=t2;
       t2=new Date().getTime();
    }
});