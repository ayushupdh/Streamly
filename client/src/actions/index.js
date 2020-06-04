import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM} from './types'
import history from '../history'
import streams from '../apis/streams'
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

export const createStream =(formValues)=>{
    return async(dispatch, getState)=> {
            const {userId}= getState().auth;
            const response = await streams.post('/streams', {...formValues, userId});
            dispatch({type:CREATE_STREAM, payload:response.data })
            //Do programmatic navigation
            history.push('/');
    }
}

export const fetchStreams =()=>{
    return async(dispatch)=> {
            const response = await streams.get('/streams');
            dispatch({type:FETCH_STREAMS, payload:response.data })
    }
}
export const fetchStream =(id)=>{
    return async(dispatch)=> {
            const response = await streams.get(`/streams/${id}`);
            dispatch({type:FETCH_STREAM, payload:response.data })
    }
}
export const editStream =(id, formValues)=>{
    return async(dispatch)=> {
            const response = await streams.patch(`/streams/${id}`, formValues);
            console.log(response);
            dispatch({type:EDIT_STREAM, payload:response.data })
            history.push('/')
    }
}

export const deleteStream =(id)=>{
    return async(dispatch)=> {
            await streams.put(`/streams/${id}`);
            dispatch({type:DELETE_STREAM, payload:id })
    }
}