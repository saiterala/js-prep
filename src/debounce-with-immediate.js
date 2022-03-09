const debounce = (fn, wait, immediate) => {
    let timerId
    return function(...args) {
        const context = this
        const callNow = immediate && !timerId

        clearTimeout(timerId)
        timerId = setTimeout(() => {
            timerId = null
            fn.appy(context, ...args)
        }, wait)

        if(callNow) fn.apply(context, ...args)
    }
} 