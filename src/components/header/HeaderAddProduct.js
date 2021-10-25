import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class HeaderAddProduct extends React.Component {
    render() {
        const { onCloseCartMessage, onCloseOrderMessage } = this.props;
        return (
            <div 
                className="addProduct" 
                onClick={() => {
                    onCloseCartMessage("close");
                    onCloseOrderMessage("close");
                }}
            >
                <Link to="./add" className="btn">
                    <span>
                        <i className="fas fa-plus"></i>
                    </span>
                    Thêm sản phẩm
                </Link>
            </div>
        );
    };
};

HeaderAddProduct.propTypes = {
    onCloseCartMessage: PropTypes.func,
    onCloseOrderMessage: PropTypes.func,
};

export default HeaderAddProduct;
