export const dataReducer = (state : number = 0, action : string) =>{
    switch (action) {
        case "add":
            state++
            return state
        case "minus":
            state--
            return state
        default:
            return state
    }
}