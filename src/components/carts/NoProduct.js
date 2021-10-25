import React from 'react';

class NoProduct extends React.Component {
    render() {
        return (
            <div className="no-product">
                <img src="./images/cart/noproduct.png" alt="no-product" />
                <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
            </div>
        );
    };
}

export default NoProduct;
