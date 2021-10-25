import * as Types from "./../constans/TypeActions";
import CallApi from './../utils/CallApi';

export const actDeleteOrderRequest = (id) => {
    return dispatch => {
        CallApi(`orders/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteOrder(res.data));
        });
    };
};

export const actDeleteOrder = (order) => {
    return {
        type: Types.DELETE_ORDER,
        order,
    };
};