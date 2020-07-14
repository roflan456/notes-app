import { SHOW_ALERT,HIDE_ALERT } from "./alertTypes"

const  handlers = {
    [SHOW_ALERT]: (state,{payload}) => ({...payload, visible:true}),
    [HIDE_ALERT]: (state) => ({...state,visible:false}),
    DEFAULT:state => state
}


export const alerReducer  = (state,action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}