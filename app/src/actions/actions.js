import axios from 'axios'

//action suite
//action types

export const FETCH_JOKES_START = "FETCH_JOKES_START";
export const FETCH_JOKES_SUCESS = "FETCH_JOKES_FETCH_JOKES_SUCESS";
export const FETCH_JOKES_FAILURE = "FETCH_JOKES_FAILURE";


//Action Creators

export const fetchJokes = () => {
    return dispatch => {
        //1st dispatch an isLoading action
        dispatch({ type: FETCH_JOKES_START});
        //2nd - do the async operation

        axios
        .get("https://official-joke-api.appspot.com/random_ten")
        .then(res => {
            //res.data
            dispatch({ type:FETCH_JOKES_SUCESS, payload: res.data}) //Fetching jokes 
        })
        .catch(err => {
            dispatch({ type:FETCH_JOKES_FAILURE, payload: err.message })
        })
    }
}
