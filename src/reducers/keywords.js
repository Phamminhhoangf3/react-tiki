import * as Types from './../constans/TypeActions';

const initialState = "";

const keywords = (state = initialState, action) => {
    const { keywords } = action;
    switch (action.type) {
        case Types.SEARCH_PRODUCT:
            if(keywords !== "") {
                state = keywords;
            }else {
                state = initialState;
            };
            return state;
        default: return state;
    };
};

export default keywords;