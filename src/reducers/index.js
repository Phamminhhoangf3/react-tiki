import { combineReducers } from 'redux';
import products from './products';
import categorys from './categorys';
import category from './category';
import carts from './carts';
import cartMessage from './cartMessage';
import orderMessage from './orderMessage';
import keywords from './keywords';
import productEdit from './productEdit';
import orders from './orders';

const appReducer = combineReducers({
    products,
    categorys,
    category,
    carts,
    cartMessage,
    orderMessage,
    keywords,
    productEdit,
    orders
});

export default appReducer;