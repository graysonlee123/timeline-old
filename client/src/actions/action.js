export const SET_AUTH = 'SET_AUTH';

export const toggleAuth = function(bool) {
    return { type: SET_AUTH, bool }
}