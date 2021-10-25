import * as Types from "./../constans/TypeActions";
import CallApi from './../utils/CallApi';

export const actFetchAllOrdersRequest = () => {
    return dispatch => {
        return CallApi('orders', 'GET', null).then(res => {
                dispatch(actFetchAllOrders(res.data));
            });
    };
};

export const actFetchAllOrders = (orders) => {
    return {
        type: Types.FETCH_ORDER,
        orders
    };
};