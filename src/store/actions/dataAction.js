export const dataAction = data => ({
    type: "ADD_DATA",
    payload: data
});


export const getAvatar = avatar => ({
    type: "GET_AVATAR",
    payload: avatar
});

export const selectAccount = acc => ({
    type: "SELECT_ACCOUNT",
    payload: acc
})