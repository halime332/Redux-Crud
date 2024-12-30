const initialState = {
    user: null,
    token: null,
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "LOGIN":
            return state;

        case "REGISTER":
            return state;

        case "LOGOUT":
            return state;

        //burda tanımlı olmayan bir aksiyon tetiklenirse user state'inin sabit olarak kalması sağlar
        default:
            return state;
    };

};
export default userReducer;