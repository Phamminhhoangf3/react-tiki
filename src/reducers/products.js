import * as Types from './../constans/TypeActions'

const initialState = []

const findIndex = (products, id) => {
     let result = -1;
     products.forEach((product, index) => {
          if (product.id === id) {
               result = index;
          };
     });
     return result;
};

const products = (state = initialState, action) => {
     let index = -1;
     const { products, product, productEdit, id } = action;
     switch(action.type) {
          case Types.FETCH_PRODUCTS:
               state = products;
               return [...state];
          case Types.ADD_PRODUCT:
               state.push(product);
               return [...state];
          case Types.DELETE_PRODUCT:
               index = findIndex(state, id);
               state.splice(index, 1);
               return [...state];
          case Types.UPDATE_PRODUCT:
               index = findIndex(state, productEdit.id);
               state[index] = productEdit;
               return [...state];
          default: return [...state];
     }
};
export default products;