import * as Types from './../constans/TypeActions';

const initialState = "Tất cả sản phẩm";

const category = (state = initialState, action) => {
    switch (action.type) {
        case Types.SELECT_CATEGORY:
            state = action.category;
            return state
        default: return state;
    }
};

export default category;