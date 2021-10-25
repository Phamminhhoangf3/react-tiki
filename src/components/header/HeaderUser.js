import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Message from './Message';

class HeaderUser extends React.Component {
    render() {
        const { orders, onCloseCartMessage, orderMessage, onCloseOrderMessage } = this.props;
        const quantityOrder = orders.length > 0 ? orders.length : null;
        let message = null;
        if (orderMessage === "Bạn đã đặt hàng thành công !" ) {
            message = <Message orderMessage={orderMessage} onCloseMessage={onCloseOrderMessage} /> ;
        } else if(orderMessage === "close") {
            message = null;
        }
        return (
            <div className="user flex-row">
                <div 
                    className="user-icon" 
                    onClick={() => {
                        onCloseCartMessage("close");
                        onCloseOrderMessage("close");
                    }
                }>
                <Link to='./order' style={{ textDecoration: 'none' }}>
                    <img src="./images/icon/user.png" alt="user.png" />
                    <span className="number-order">{quantityOrder}</span>
                </Link>
                {message}
                </div>
                <div className="user-title m-0">
                    <p>Tài khoản</p>
                    <div className="user-name flex-row">
                        <h1>Admin</h1>
                    </div>
                </div>
            </div>
        );
    }
};

HeaderUser.propTypes = {
    orders: PropTypes.array,
    orderMessage: PropTypes.string,
    onCloseCartMessage: PropTypes.func,
    onCloseOrderMessage: PropTypes.func,
};

export default HeaderUser;
