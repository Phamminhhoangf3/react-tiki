import React from 'react';

class NoProductOder extends React.Component {
    render() {
        return (
            <div className="no-order">
                <img src="./images/order/no_order.svg" alt="no-order" />
                <p>Hiện tại bạn chưa có đơn hàng nào.</p>
            </div>
        );
    };
}

export default NoProductOder;
