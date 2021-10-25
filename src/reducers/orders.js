import * as Types from './../constans/TypeActions';

let data = JSON.parse(localStorage.getItem('USER'));

let initialState = data ? data : [];

const orders = (state = initialState, action) => {
    const { orders, order } = action;
    let index = -1;
    switch (action.type) {
        case Types.FETCH_ORDER:
            state = orders;
            localStorage.setItem('USER', JSON.stringify(state));
            return [...state];
        case Types.ADD_ORDER:
            state.push(order);
            localStorage.setItem('USER', JSON.stringify(state));
            return [...state];
        case Types.DELETE_ORDER:
            index = findIndex(state, order);
            state.splice(index, 1);
            localStorage.setItem('USER', JSON.stringify(state));
            return [...state];
        default: return [...state];
    };
};

const findIndex = (state, order) => {
    let index = -1;
    for(let i = 0; i < state.length; i++ ) {
        if(state[i].orderID === order.orderID ) {
            index = i;
        };
    };
    return index;
};

export default orders;