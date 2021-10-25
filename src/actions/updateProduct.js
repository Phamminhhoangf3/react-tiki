import * as Types from "./../constans/TypeActions";
import CallApi from './../utils/CallApi';

export const actGetProductRequest = (id) => {
    return dispatch => {
        return CallApi(`products/${id}`, 'GET', null).then(
            res => {
                dispatch(actGetProduct(res.data))
            }
        )
    }
};

export const actGetProduct = (product) => {
    return {
        type: Types.GET_PRODUCT,
        product,
    };
};

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return CallApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        });
    };
};

export const actUpdateProduct = (productEdit) => {
    return {
        type: Types.UPDATE_PRODUCT,
        productEdit
    };
};