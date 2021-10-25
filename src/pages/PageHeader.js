import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actCloseMessages, actSearchProduct, actCloseOrderMessages } from './../actions/index';
import HeaderAddProduct from '../components/header/HeaderAddProduct';
import HeaderSearch from '../components/header/HeaderSearch';
import HeaderCart from '../components/header/HeaderCart';
import HeaderUser from '../components/header/HeaderUser';

class PageHeader extends React.Component {

    render() {
        const { 
                carts, 
                cartMessage, 
                onCloseCartMessage, 
                onSearchProduct, 
                orders, 
                orderMessage, 
                onCloseOrderMessage 
            } = this.props;
        return (
            <div className="header">
                <div className="container">
                    <div className="container-margin" >
                        <div className="flex-row nav-1 ">
                            <Link to='/'>
                                <div className="logo" onClick={() => onCloseOrderMessage("close")}>
                                    <img src="./images/logo/tiki.png" alt="" />
                                </div>
                            </Link>
                            <HeaderAddProduct 
                                        onCloseCartMessage={onCloseCartMessage} 
                                        onCloseOrderMessage={onCloseOrderMessage}
                            />
                            <HeaderSearch onSearchProduct={onSearchProduct} />
                            <HeaderUser 
                                        orders={orders} 
                                        orderMessage={orderMessage} 
                                        onCloseCartMessage={onCloseCartMessage} 
                                        onCloseOrderMessage={onCloseOrderMessage}
                            />
                            <HeaderCart 
                                        carts={carts} 
                                        cartMessage={cartMessage} 
                                        onCloseCartMessage={onCloseCartMessage} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

PageHeader.propTypes = {
    carts: PropTypes.array,
    orders: PropTypes.array,
    cartMessage: PropTypes.string,
    orderMessage: PropTypes.string,
    onCloseCartMessage: PropTypes.func,
    onSearchProduct: PropTypes.func,
    onCloseOrderMessage: PropTypes.func,
};

const mapStateToprops = (state) => {
    return {
        carts: state.carts,
        cartMessage: state.cartMessage,
        orderMessage: state.orderMessage,
        orders: state.orders,
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        onCloseCartMessage: (cartMessageClose) => {
            dispatch(actCloseMessages(cartMessageClose));
        },
        onCloseOrderMessage: (cartMessageClose) => {
            dispatch(actCloseOrderMessages(cartMessageClose));
        },
        onSearchProduct: (keywords) => {
            dispatch(actSearchProduct(keywords));
        }
    };
}

export default connect(mapStateToprops, mapDispatchToprops)(PageHeader);
