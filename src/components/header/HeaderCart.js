import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Message from './Message';

class HeaderCart extends React.Component {
    render() {
        const { carts, cartMessage, onCloseCartMessage } = this.props;
        const messageCart = cartMessage ? <Message cartMessage={cartMessage} onCloseMessage={onCloseCartMessage}/> : null;
        return (
            <div className="cart-icon" >
                <Link to='./cart' style={{ textDecoration: 'none' }}>
                    <div className="cart-wrapper flex-row" onClick={() => onCloseCartMessage("close")}>
                        <div className="cart-img">
                            <img src="./images/icon/giohang.png" alt="" />
                            <span>{this.showIconQuantity(carts)}</span>
                        </div>
                        <div className="cart-text m-0">
                            <p>Giỏ Hàng</p>
                        </div>
                    </div>
                </Link>
                {messageCart}
            </div>
        );
    };

    showIconQuantity = (carts) => {
        let result = null;
        for (let i = 0; i < carts.length; i++) {
            result += carts[i].quantity;
        };
        return result;
    };
};

HeaderCart.propTypes = {
    carts: PropTypes.array,
    cartMessage: PropTypes.string,
    onCloseCartMessage: PropTypes.func,
};

export default HeaderCart;
