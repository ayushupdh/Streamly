import {SIGN_IN, SIGN_OUT} from './types'
export const signIn = (userID)=>{
    return({
        type: SIGN_IN,
        payload: userID
    })
}

export const signOut = ()=>{
    return({
        type: SIGN_OUT
    })
}
