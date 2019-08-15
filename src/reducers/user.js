import {
    SET_USER,
} from '../constants/user';

const initialState = null;

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return action.data;
        default:
            return state;
    }
}

export default userReducer;