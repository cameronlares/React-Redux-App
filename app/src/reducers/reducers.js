import{
    FETCH_JOKES_START,
    FETCH_JOKES_SUCESS,
    FETCH_JOKES_FAILURE
} from "../actions/actions"

const initialState = {
    isLoading: false,
    jokes: [],
    error: ""
}


export const reducer = (state = initialState, action) =>{
switch (action.type) {
    case FETCH_JOKES_START:
        return {
            ...state,
            isLoading:true
        };
        case FETCH_JOKES_SUCESS:
            return {
                ...state,
                isLoading: false,
                jokes: action.payload,
                error: ""
            };
            case FETCH_JOKES_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                };
                default:
                    return state;
}
}