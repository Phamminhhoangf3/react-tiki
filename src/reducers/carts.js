import * as Types from './../constans/TypeActions';

let data = JSON.parse(localStorage.getItem('CART'));

let initialState = data ? data : [];

const carts = (state = initialState, action) => {
    const { product, quantity } = action;
    let index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            if(state.length > 0) {
                index = findIndexToCart(state, product);
                if(index !== -1) {
                    state[index].quantity += quantity;
                }else {
                    state.push({
                        product,
                        quantity,
                    });
                };
            }else {
                state.push({
                    product,
                    quantity,
                });
            };
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_CART:
                index = findIndexToCart(state, product);
                if (index !== -1) {
                    state.splice(index, 1);
                };
                localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.CHANGE_QUANTITY:
            if (quantity > 0) {
                index = findIndexToCart(state, product);
                if(index !== -1) {
                    state[index].quantity = quantity;
                };
            };
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    };
};

const findIndexToCart = (state, product) => {
    let index = -1;
    for(let i = 0; i < state.length; i++ ) {
        if(state[i].product.id === product.id ) {
            index = i;
        };
    };
    return index;
};

export default carts;