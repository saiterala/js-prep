const MY_TIMERS = {
    intervalIds : [],
    setInterval : function(fn, delay){
        let id = setInterval(fn ,delay)
        this.intervalIds.push(id)
        return id
    },
    clearAllInterval: function(){
        while(this.intervalIds.length){
            clearTimeout(this.intervalIds.pop())
        }
    }
}

MY_TIMERS.setInterval(() => {
    console.log("Hello");
  }, 2000);
  
MY_TIMERS.setInterval(() => {
console.log("Hello2");
}, 500);



MY_TIMERS.setInterval(() => {
console.log("Hello3");
}, 1000);

setTimeout(() => MY_TIMERS.clearAllInterval(), 10000)