import React from 'react';
import PropTypes from 'prop-types';
import ModalDelete from '../modal/ModalDelete';

class CartItem extends React.Component {
    render() {
        const { product, quantity } = this.props.cart;
        const { onDeleteProductCart } = this.props;
        return (
            <div className="cart-products">
                <div className="cart-col-1">
                    <div className="cart-product">
                        <div className="cart-product-checkbox">
                        </div>
                        <div className="cart-product-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="cart-product-name">
                            <span>{product.name}</span>
                        </div>
                    </div>
                </div>
                <div className="cart-col-2">
                    <div className="cart-product-price">
                        <span>{product.price.toLocaleString()} đ</span>
                    </div>
                </div>
                <div className="cart-col-3">
                    <div className="cart-quantity">
                        <span className="btn-decrease-quantity" onClick={() => this.onChangeQuantity(product, quantity - 1)}>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" alt="" />
                        </span>
                        <div className="qty">{quantity}</div>
                        <span className="btn-increase-quantity" onClick={() => this.onChangeQuantity(product, quantity + 1)}>
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" alt="" />
                        </span>
                    </div>
                </div>
                <div className="cart-col-4">
                    <div className="product-price">
                        <span>{this.showTotalprice(product.price, quantity).toLocaleString()} đ</span>
                    </div>
                </div>
                <div className="cart-col-5" >
                    <button
                        type="button"
                        className="icon-delete"
                        data-bs-toggle="modal"
                        data-bs-target={`#deleteProductToCart${product.id}`}
                    >
                        <i className="far fa-trash-alt"></i>
                    </button>
                </div>
                <ModalDelete onDeleteProductCart={onDeleteProductCart} product={product} />
            </div>
        );
    };

    showTotalprice = (price, quantity) => {
        return price * quantity;
    };

    onChangeQuantity = (product, quantity) => {
        this.props.onChangeQuantity(product, quantity);
    }
};

CartItem.propTypes = {
    cart: PropTypes.shape({
        product: PropTypes.object,
        quantity: PropTypes.number
    }),
    onDeleteProductCart: PropTypes.func,
};

export default CartItem;
