const fnc1 = () => {
    setTimeout(() => {
        console.log("fnc1 call")
    }, 3000)
}
const fnc2 = () => {
    setTimeout(() => {
        console.log("fnc2 call")
    }, 1000)
}
const fnc3 = () => {
    setTimeout(() => {
        console.log("fnc3 call")
    }, 2000)
}

export const allCall = () => {
    fnc1()
    fnc2()
    fnc3()
}

const promiseFnc1 = () =>{
    return new Promise<Boolean>((resolve,reject) =>{
        setTimeout(() => {
            console.log("promiseFnc1 call")
            resolve(true)
        }, 3000)
    })
}
const promiseFnc2 = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("promiseFnc2 call")
            resolve(true)
        }, 1000)
    })
}
const promiseFnc3 = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("promiseFnc3 call")
            resolve(true)
        }, 2000)
    })
}

export const allPromiseCall = async () => {
    await promiseFnc1()
    await promiseFnc2()
    await promiseFnc3()
}

export const thenPromiseCall = async () => {
    promiseFnc1().then(th1 => {
        console.log('th1', th1)
        promiseFnc2().then(th2 => {
            console.log('th2', th2)
            promiseFnc3().then( th3 => {
                console.log('th3', th3)
                console.log("All services finish..")
            })
        })
    })
}