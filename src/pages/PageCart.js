import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actDeleteProductCart, actChangeQuantity, actSaveOrderRequest } from './../actions/index';
import ModalOrder from '../components/modal/ModalOrder';
import CartItem from './../components/carts/CartItem';
import NoProduct from './../components/carts/NoProduct';

class PageCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderID: "",
            cartProduct: [],
            date: "",
        };
    };

    render() {
        const { carts, onDeleteProductCart, onChangeQuantity, onSaveOrder } = this.props;
        const noproduct = carts.length === 0 ? <NoProduct /> : null;
        const totalPrice = this.totalPrice(carts);
        const order  = this.state;
        return (
            <div className="cart" >
                <div className="container" >
                    <div className="container-margin" >
                        <div className="cart-wrapper" >
                            <div className="cart-inner">
                                <h4 className="cart-inner-tite">giỏ hàng</h4>
                                <div className="cart-header" >
                                    <div className="cart-col-1">
                                        <span>Sản phẩm</span>
                                    </div>
                                    <div className="cart-col-2"><span>Đơn giá</span></div>
                                    <div className="cart-col-3"><span>Số lượng</span></div>
                                    <div className="cart-col-4"><span>Thành tiền</span></div>
                                    <div className="cart-col-5">
                                        <span>Xóa</span>
                                    </div>
                                </div>
                                <div className="cart-content">
                                    {this.showCartItem(carts, onDeleteProductCart, onChangeQuantity)}
                                    {noproduct}
                                </div>
                            </div>
                            <div className="cart-total">
                                <h4>Tổng Tiền</h4>
                                <div className="prices" >
                                    <ul className="prices-items">
                                        <li className="prices-item">
                                            <span>Tạm Tính</span>
                                            <span>{totalPrice.toLocaleString()} đ</span>
                                        </li>
                                        <li className="prices-total">
                                            <span>Tổng Cộng</span>
                                            <span>{totalPrice.toLocaleString()} đ</span>
                                        </li>
                                    </ul>
                                </div>
                                <button
                                    className="btn-cart-buy"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => this.onSaveCarts(carts)}
                                    disabled={!carts.length}
                                >Mua Hàng</button>
                                <ModalOrder order={order} totalPrice={totalPrice} onSaveOrder={onSaveOrder}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    onSaveCarts(carts) {
        if (carts.length > 0) {
            const date = new Date();
            const dateFormatted = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()} (${date.getHours()}:${date.getMinutes()}:${date.getSeconds()})` 
            this.setState({
                cartProduct: carts,
                date: dateFormatted
            });
        };
    };

    showCartItem = (carts, onDeleteProductCart, onChangeQuantity) => {
        let result = null;
        if (carts.length > 0) {
            result = carts.map((cart, index) => {
                return <CartItem
                    key={index} cart={cart}
                    onDeleteProductCart={onDeleteProductCart}
                    onChangeQuantity={onChangeQuantity}
                />
            });
        };
        return result;
    };

    totalPrice = (carts) => {
        let result = 0;
        for (let i = 0; i < carts.length; i++) {
            result += (carts[i].product.price * carts[i].quantity);
        };
        return result;
    };
};

PageCart.propTypes = {
    carts: PropTypes.array,
    onDeleteProductCart: PropTypes.func,
    onChangeQuantity: PropTypes.func,
    onSaveOrder: PropTypes.func,
};

const mapStateToprops = (state) => {
    return {
        carts: state.carts,
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        onDeleteProductCart: (product) => {
            dispatch(actDeleteProductCart(product));
        },
        onChangeQuantity: (product, quantity) => {
            dispatch(actChangeQuantity(product, quantity));
        },
        onSaveOrder: (carts, orderMessage) => {
            dispatch(actSaveOrderRequest(carts, orderMessage));
        }
    };
};

export default connect(mapStateToprops, mapDispatchToprops)(PageCart);
