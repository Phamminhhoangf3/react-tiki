import * as Types from '../constans/TypeActions';

let initialState = '';

const orderMessage = (state = initialState, action) => {
    const { orderMessage, closeOrderMessage } = action;
    switch (action.type) {
        case Types.ORDER_MESSAGES:
            if(orderMessage !== null) {
                state = orderMessage;
            };
            return state;
        case Types.CLOSE_ORDER_MESSAGE:
            state = closeOrderMessage;
            return state;
        default: return state;
    };
};

export default orderMessage;