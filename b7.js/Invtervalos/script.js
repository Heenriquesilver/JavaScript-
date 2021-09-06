/*
 let timer;
 
function start(){
   timer = setInterval(showTime, 10); 
 }
 function stop(){
     clearInterval(timer);
 }
 
 
 function showTime(){
     let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds()
    let mm = d.getMilliseconds();

    let txt = `${h}:${m}:${s} - ${mm}`
    document.querySelector('.demo').innerHTML = txt;
}
*/
let timer;

function run(){
 timer= setTimeout(function(){
   document.querySelector('.demo').innerHTML ='You got it'
}, 2000);

};

function stopset(){
    clearTimeout(timer)
}