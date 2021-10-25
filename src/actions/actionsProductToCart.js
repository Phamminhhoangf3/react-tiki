import * as Types from "../constans/TypeActions";
import CallApi from '../utils/CallApi';

export const actAddToCartRequest = (id, quantity, cartMessage) => {
    return dispatch => {
        return CallApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actAddToCart(res.data, quantity));
            dispatch(actCartMessages(cartMessage))
        });
    };
};

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    };
};

export const actCartMessages = (cartMessage) => {
    return {
        type: Types.CHANGE_MESSAGES,
        cartMessage,
    };
};

export const actCloseMessages = (cartMessage) => {
    return {
        type: Types.CLOSE_MESSAGES,
        cartMessage,
    };
};


export const actDeleteProductCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_CART,
        product,
    };
};

export const actChangeQuantity = (product, quantity) => {
    return {
        type: Types.CHANGE_QUANTITY,
        product,
        quantity,
    }
};