export const setSession = session => {
    return { type: 'SET_SESSION', session }
}

export const logOut = () => {
    return { type: 'LOGOUT' }
}