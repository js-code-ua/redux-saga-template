import {
    SET_USER,
} from '../constants/user';

export const setUser = data => ({
    type: SET_USER,
    data,
})