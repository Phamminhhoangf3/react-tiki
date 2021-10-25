import * as Types from "./../constans/TypeActions";
import CallApi from './../utils/CallApi';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return CallApi('products', 'GET', null)
            .then(res => {
                dispatch(actFetchProducts(res.data));
            })
    };
};

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products,
    };
};

export const actSearchProduct = (keywords) => {
    return {
        type: Types.SEARCH_PRODUCT,
        keywords,
    };
};

export const actSelectCategory = (category) => {
    return {
        type: Types.SELECT_CATEGORY,
        category,
    };
};