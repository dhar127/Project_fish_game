let fill=90;
let intervalId=null;
const fishbowl=document.getElementById('fishbowl');
const fish=document.getElementById('fish');
const tap=document.getElementById('tap');

const emptyingfn=()=>setInterval(()=>{
    fill=fill-1;
    fishbowl.style=`--filling: ${fill}`;
    if(fill<=0){
        clearInterval(intervalId);
    }
    else if(fill<20){
        fish.classList.add('fish--dead');
    }
    else if(fill<50){
        fish.classList.add('fish--dying');
    }
    else{
        fish.classList.remove('fish--dead');
        fish.classList.remove('fish--dying');
    }
},200);
intervalId=emptyingfn();
tap.addEventListener('click',()=>{
    tap.classList.add('tap--active');
    setTimeout(()=>tap.classList.remove('tap--active'),500);
    if(fill<=0){
        intervalId=emptyingfn();
        fish.classList.add('fish--floating');
    }
    fill=Math.min(fill+20,90);
});