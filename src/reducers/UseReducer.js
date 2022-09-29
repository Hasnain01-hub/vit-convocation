export const userReducer = (state = null, action) => {
    switch (action.type) {
        case "LOGGED_USERS":
            return action.payload;
        case "LOGOUT_USERS":
            return action.payload;
        default:
            return state;
    }
};