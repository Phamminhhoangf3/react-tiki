import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../actions/index'

class PageActionsProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: '',
            productImage: '',
            productName: '',
            productCategory: 'Thực phẩm',
            productConsume: 0,
            productPrice: '',
            productDiscount: '',
            productRating: 0,
        };
    };

    componentDidMount() {
        const { match, onGetProduct } = this.props;
        if (match) {
            const id = match.params.id;
            onGetProduct(id);
        };
    };

    componentDidUpdate(prevProps) {
        const { productEdit } = this.props;
        if (prevProps.productEdit !== productEdit) {
            this.setState({
                productId: productEdit.id,
                productImage: productEdit.image,
                productName: productEdit.name,
                productCategory: productEdit.category,
                productPrice: productEdit.price,
                productDiscount: productEdit.discount,
                productConsume: productEdit.consume,
                productRating: productEdit.rating,
            });
            window.scrollTo(0, 0);
        };
    };

    onChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === "productPrice") {
            if (value !== "") {
                value = parseInt(value.replace(/\D/g, "")).toLocaleString();
            };
        };
        this.setState({
            [name]: value,
        });
    };

    stringToNumber(string) {
        let result = null;
        if (typeof string === "string") {
            result = parseInt(string.replace(/\D/g, ""));
        } else {
            result = string;
        }
        return result;
    };

    onSave = (e) => {
        e.preventDefault();
        const { history, onAddProduct, onUpdateProduct } = this.props;
        const {
            productId,
            productImage,
            productName,
            productCategory,
            productConsume,
            productPrice,
            productDiscount,
            productRating,
        } = this.state;
        const price = this.stringToNumber(productPrice);
        const discount = this.stringToNumber(productDiscount);
        const product = {
            id: productId,
            image: productImage,
            name: productName,
            category: productCategory,
            consume: productConsume,
            price: price,
            discount: discount,
            rating: productRating
        };
        if (product.id === '') {
            onAddProduct(product);
        } else {
            onUpdateProduct(product);
        };
        history.goBack();
    };

    goHome = () => {
        const { history } = this.props;
        history.push({ pathname: '/' })
        window.scrollTo(0, 0);
    };

    render() {
        const {
            productId,
            productImage,
            productName,
            productCategory,
            productConsume,
            productPrice,
            productDiscount,
            productRating
        } = this.state;
        return (
            <div className="add" >
                <div className="container" >
                    <div className="container-margin">
                        <div className="add-wrapper" >
                            <h3>Trang thêm sản phẩm </h3>
                            <form className="form-add text-center" onSubmit={this.onSave} >
                                <div className="form-floating mb-3">
                                    <input
                                        type="hidden"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name="productId"
                                        value={productId}
                                        onChange={this.onChange}
                                    />
                                    <label htmlFor="floatingInput" className="form-label">id :</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationDefault01"
                                        placeholder="name@example.com"
                                        name="productImage"
                                        value={productImage}
                                        onChange={this.onChange}
                                        required
                                    />
                                    <label htmlFor="validationDefault01" className="form-label">Link hình ảnh :</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        name="productName"
                                        value={productName}
                                        placeholder="name@example.com"
                                        onChange={this.onChange}
                                        required
                                    />
                                    <label htmlFor="floatingInput" className="form-label">Tên sản phẩm :</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <select
                                        className="form-select"
                                        id="floatingSelect"
                                        aria-label="Floating label select example"
                                        name="productCategory"
                                        value={productCategory}
                                        onChange={this.onChange}
                                        required
                                    >
                                        <option value="Thực phẩm">Thực phẩm</option>
                                        <option value="Xe">Xe</option>
                                        <option value="Máy ảnh">Máy ảnh</option>
                                        <option value="Điện tử">Điện tử</option>
                                        <option value="Thời trang">Thời trang</option>
                                        <option value="Nhà cửa và đời sống">Nhà cửa và đời sống</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Danh mục :</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="hidden"
                                        className="form-control"
                                        id="floatingInput"
                                        name="productConsume"
                                        value={productConsume}
                                        placeholder="name@example.com"
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        name="productPrice"
                                        value={productPrice.toLocaleString()}
                                        placeholder="name@example.com"
                                        onChange={this.onChange}
                                        min="1000"
                                        required
                                    />
                                    <label htmlFor="floatingInput" className="form-label">Giá bán (VNĐ):</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        name="productDiscount"
                                        value={productDiscount}
                                        placeholder="name@example.com"
                                        onChange={this.onChange}
                                        required
                                    />
                                    <label htmlFor="floatingInput" className="form-label">Giảm giá (%):</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="hidden"
                                        className="form-control"
                                        id="floatingInput"
                                        name="productRating"
                                        value={productRating}
                                        placeholder="name@example.com"
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary save-product">Lưu</button>&ensp;
                                <button
                                    type="submit"
                                    className="btn btn-outline-primary go-home"
                                    onClick={() => this.goHome()}
                                >Quay về trang chủ</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

PageActionsProduct.propTypes = { 
    onGetProduct: PropTypes.func,
    productEdit: PropTypes.object,
    onAddProduct: PropTypes.func,
    onUpdateProduct: PropTypes.func,
};

const mapStateToprops = (state) => {
    return {
        productEdit: state.productEdit
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onGetProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    };
};

export default connect(mapStateToprops, mapDispatchToprops)(PageActionsProduct);
