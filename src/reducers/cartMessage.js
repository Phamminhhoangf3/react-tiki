import * as Types from '../constans/TypeActions';

let initialState = '';

const cartMessage = (state = initialState, action) => {
    const { cartMessage } = action;
    switch (action.type) {
        case Types.CHANGE_MESSAGES:
            if(cartMessage !== null) {
                state = cartMessage;
            };
            return state;
        case Types.CLOSE_MESSAGES:
            if(cartMessage === "close") {
                state = '';
            };
            return state;
        default: return state;
    };
};

export default cartMessage;