import axios from 'axios'

// Actions 
import * as actions from '../api'

const api = ({dispatch }) => next => async action => {

    if(action.type !== actions.apiCallBegan.type) return next(action);

    const { url, headers ,method ,data ,onStart ,onSuccess, onError } = action.payload;
    
    if(onStart) dispatch({type: onStart});
    
    next(action);

    try{
        const response = await axios.request({
            baseURL: 'http://localhost:4000',
            url,
            headers,
            method,
            data,
        });


        // If the api call is succesfull dispatch another 'event' with the data from the server
        // General
        dispatch(actions.apiCallSuccess(response.data))

        //Specific
        if(onSuccess) dispatch({type: onSuccess, payload: response.data});

    }

    catch(error){

        // General
        dispatch(actions.apiCallFailed(error.response))
        
        // Specific
        if(onError) dispatch({type: onError, payload: error.response.data.message});

    }

}

export default api;

