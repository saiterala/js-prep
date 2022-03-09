const memoize = (fn) => {
    const map = {}
    return (...args) => {
        const key = JSON.stringify(args)
        if(key in map){
            return map[key]
        }

        const funcVal = fun(...args)
        map[key] = funcVal
        return funcVal
    } 
}