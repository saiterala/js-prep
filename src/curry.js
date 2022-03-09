const curry = (callback) => {

    const curriedFunction = (...args) => {
        if (args.length === 0) {
            return callback()
        }
        return (...otherArgs) => {
            if (otherArgs.length === 0) {
                return callback(...args)
            }
            return curriedFunction(...args, ...otherArgs)

        }

    }
    return curriedFunction
}