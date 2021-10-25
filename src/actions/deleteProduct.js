import * as Types from "./../constans/TypeActions";
import CallApi from './../utils/CallApi';

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return CallApi(`products/${id}`, 'DELETE', null, dispatch).then(res => { 
                    dispatch(actDeleteProduct(res.data.id));
                }
            );
    };
};

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    };
};