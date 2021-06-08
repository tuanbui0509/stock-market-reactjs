import * as types from '../constants/User/ActionType';
const initialState = null;

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return action.user; 
        case types.USER_LOGOUT:
            return null
        case types.USER_GET:
            return action.user;
        default: return state;
    }

}

export default myReducer;