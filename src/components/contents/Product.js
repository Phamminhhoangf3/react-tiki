import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as messages from './../../constans/messages';
import ModalDeleteProduct from '../modal/ModalDeleteProduct';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
        };
    };

    render() {
        const { product, onDeleteProduct, onAddToCart } = this.props;
        return (
            <>
                <div className="l-2-5">
                    <div className="product-image">
                        <img className="image" src={product.image} alt="" />
                    </div>
                    <div className="product-name">
                        <span>{product.name}</span>
                    </div>
                    <div className="rating">
                        <div className="rating-start">
                            {this.showRating(product.rating)}
                        </div>
                        <p>Đã bán: {product.consume}</p>
                    </div>
                    <div className="price">
                        <h1 >{product.price.toLocaleString()} ₫</h1>
                        <h2 >-{product.discount}%</h2>
                    </div>
                    <div className="button" >
                        <button
                            className="btn btn-primary btn-buy-product"
                            onClick={() => {
                                window.scrollTo(0, 0);
                                return onAddToCart(product.id, 1, messages.ADD_TO_CART_SUCCESS)}}
                        >
                            Chọn Mua
                        </button>
                        <div className="button-action-product">
                            <Link
                                to={`products/${product.id}/edit`}
                                className="btn btn-outline-success btn-edit-product"
                            >
                                sửa
                            </Link>
                            <button
                                className="btn btn-outline-danger btn-delete-product ms-1"
                                data-bs-toggle="modal"
                                data-bs-target={`#deleteProduct${product.id}`}
                            >
                                xóa
                            </button>
                        </div>
                    </div>
                </div>
                <ModalDeleteProduct onDeleteProduct={onDeleteProduct} productID={product.id} />
            </>
        );
    };

    openModal(isShowing) {
        this.setState({
            isShowing: !isShowing,
        });
    };

    showRating(rating) {
        let result = [];
        for (let i = 0; i < rating; i++) {
            result.push(<i key={i} className="fas fa-star"></i>)
        };
        for (let i = 0; i < (5 - rating); i++) {
            result.push(<i key={5 - i} className="far fa-star"></i>)
        }
        return result;
    };
};

Product.propTypes = {
    product: PropTypes.object,
    onDeleteProduct: PropTypes.func,
    onAddToCart: PropTypes.func,
};

export default Product;
