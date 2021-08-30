var started = false;
var timeID;
var timeInMilli = 0;
var duration = 0;

function start(id){
    let btn = document.getElementById("stp");
    if(!started){
        btn.innerHTML = `Pause`;
        started = true;
        timeID = setInterval(updateClock,10);
    }
    else{
        started = false;
        btn.innerText = "Continue"; 
        clearInterval(timeID);
    }

}

function getTwo(n){
    if(n<10)
        return '0' + n;
    else
        return '' + n;
}

function updateClock(){
    timeInMilli += 10;

    document.getElementById("minutes").innerText = getTwo(parseInt(timeInMilli/60000));
    document.getElementById("seconds").innerText = getTwo(parseInt((timeInMilli/1000))%60);
    document.getElementById("cent-secs").innerText = getTwo(parseInt((timeInMilli/10))%100);

}

function lap(){
    if(!started)
        return;
    let laps = document.getElementById("laps");
    duration = timeInMilli - duration;

    let newLap = document.createElement("li");

    let timeStamp = document.createElement("span");
    let dur = document.createElement("span");
    timeStamp.innerHTML = `${getTwo(parseInt(timeInMilli/60000))}:${getTwo(parseInt((timeInMilli/1000))%60)}:${getTwo(parseInt((timeInMilli/10))%100)}`;
    dur.innerHTML = `${getTwo(parseInt(duration/60000))}:${getTwo(parseInt((duration/1000))%60)}:${getTwo(parseInt((duration/10))%100)}`;

    newLap.appendChild(timeStamp);
    newLap.appendChild(dur);
    laps.appendChild(newLap);

}

function reset(){
    let laps = document.getElementById("laps");
    let minElement = document.getElementById("minutes");
    let secElement = document.getElementById("seconds");
    let centElement = document.getElementById("cent-secs");
    let btn = document.getElementById("stp");

    started = false;
    clearInterval(timeID);
    minElement.innerText = "00";
    secElement.innerText = "00";
    centElement.innerText = "00";
    btn.innerText = "Start";
    timeInMilli = 0;
    laps.innerHTML = "";
    
}