import * as Types from "./../constans/TypeActions";
import CallApi from './../utils/CallApi';

export const actAddProductRequest  = (product) => {
    return (dispatch) => {
        return CallApi('products', 'POST', product)
            .then(res => {
                dispatch(actAddProduct(res.data));
            })
    }
};

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product,
    };
};