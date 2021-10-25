import * as Types from './../constans/TypeActions';

const initialState = {};

const productEdit = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_PRODUCT:
            state = action.product;
            return state;
        default: return state;
    }
};

export default productEdit;