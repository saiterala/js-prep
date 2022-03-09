const MY_TIMERS = {
    timer : '',
    setIntervalCustom: function() {
      
        this.timer = setTimeout(() => {
            console.log('Hello')
            // this.setIntervalCustom.apply(this)
            this.setIntervalCustom()
        }, 1000)
    },

    clearInterval: function() {
        clearTimeout(this.timer)
    }
}


setTimeout(() => MY_TIMERS.clearInterval(), 5000)

MY_TIMERS.setIntervalCustom()