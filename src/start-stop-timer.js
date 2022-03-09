const timer = (init = 0, step = 1) => {
    let timerId
    let count = init

    const startTimer = () => {
        if(!timerId){
            timerId = setInterval(() => {
                console.log(count)
                count += step
            }, 1000)
        }
    }

    const stopTimer = () => {
        clearInterval(timerId)
        timerId = null
    }

    return{
        startTimer,
        stopTimer
    }
}

const timerObj = timer(10, 10);
//start
timerObj.startTimer();

//stop
setTimeout(() => {
    timerObj.stopTimer();
}, 6000);