import React from 'react';
import PropTypes from 'prop-types';

class ModalDeleteProduct extends React.Component {
    render() {
        const { onDeleteProduct, productID } = this.props;
        return (
            <div className="modal fade" id={`deleteProduct${productID}`}tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{marginTop: 150}}>
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Bạn có chắc chắn xóa sản phẩm này ?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body col-8 mx-auto">
                            <button type="button" className="btn btn-outline-primary btn-lg px-5" data-bs-dismiss="modal">Không</button>&emsp;
                            <button
                                type="button"
                                className="btn btn-danger btn-lg px-5"
                                data-bs-dismiss="modal"
                                onClick={() => onDeleteProduct(productID)}
                            >Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

ModalDeleteProduct.propTypes = {
    productID: PropTypes.string,
    onDeleteProduct: PropTypes.func,
};

export default ModalDeleteProduct;