import * as Types from "./../constans/TypeActions";
import CallApi from './../utils/CallApi';

export const actSaveOrderRequest = (carts, orderMessage) => {
    return dispatch => {
        CallApi('orders', 'POST', carts).then(res => {
            dispatch(actSaveOrder(res.data));
            dispatch(actOrderMessages(orderMessage));
        });
    };
};

export const actSaveOrder = (order) => {
    return {
        type: Types.ADD_ORDER,
        order
    };
}

export const actOrderMessages = (orderMessage) => {
    return {
        type: Types.ORDER_MESSAGES,
        orderMessage,
    };
};

export const actCloseOrderMessages = (closeOrderMessage) => {
    return {
        type: Types.CLOSE_ORDER_MESSAGE,
        closeOrderMessage,
    };
};