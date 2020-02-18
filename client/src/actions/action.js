export const SET_AUTH = 'SET_AUTH'

export default function toggleAuth(bool) {
    return { type: SET_AUTH, bool }
}