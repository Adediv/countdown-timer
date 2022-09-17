const countdown = () =>{
    let countedSec = mySecs.value;
    let countedHour = myHour.value;
    let countedMin = myMin.value
    countedSec--;
    mySecs.value = countedSec;
    myTimeout = setTimeout(countdown, 1000)

    if(countedHour == 0 && countedMin == 0 && countedSec == 0){
        mySecs.value = "00"
        myMin.value = "00"
        myHour.value = "00"
        clearTimeout(myTimeout)
    }
    if(countedSec < 0 && myMin.value > 0){
        mySecs.value = 60;
    }
    if (countedSec < 0 && countedMin > 0) {
        myMin.value--
    }
    if (countedMin == 0 && myHour.value > 0){
        myMin.value = "60"
    }
    if (countedMin == 0 && countedHour > 0){
        myHour.value--
    }
}

const stop =()=>{
    clearTimeout(myTimeout);
}

const reset =()=>{
    myHour.value = ""
    myMin.value = ""
    mySecs.value = ""
}