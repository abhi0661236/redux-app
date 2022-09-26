const initialState =10;

const changeNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state+action.value;
            break;
        case "DECREMENT":
            return state-action.value;
        default:
            return state;
    }
}

export default changeNumber;