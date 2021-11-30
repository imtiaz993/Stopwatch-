let milisec= 0
let sec= 0
let min= 0
let hour= 0

let started=false;
 function start(){
     started=true;
    var timer=setInterval(()=>{
        milisec++;
        if(milisec==100){
            milisec=0;
            sec++;
        }
        if(sec== 60){
            sec=0;
            min++;
        }
        if(min== 60){
            min=0;
            hour++;
        }
        if(hour== 60){
            hour=0;
        }
       
        document.querySelector("h2").innerText = `${hour}:${min}:${sec}:${milisec}`;
       
        
    },10)
   
    document.querySelector('button:nth-child(2)').addEventListener('click', function stop(){
        started=false;
        clearInterval(timer);
    })
    document.querySelector('button:nth-child(3)').addEventListener('click', function reset(){
        started=false;
        clearInterval(timer);
        milisec= 0
        sec= 0
        min= 0
        hour= 0
        document.querySelector("h2").innerText = `${hour}:${min}:${sec}:${milisec}`;
        document.querySelector('ul').innerHTML='';
        })
        document.querySelector('button:nth-child(4)').addEventListener('click', function laps(){
         
            })
           
}
function laps(){
      
       if(started){
        let li=document.createElement('li');
        li.className='lap';
        
        li.innerHTML=`<span>${hour}</span><span>:</span><span>${min}</span><span>:</span><span>${sec}</span><span></span>:<span>${milisec}</span>`
        document.querySelector('ul').appendChild(li)
       }
    

    

}





78904321