import React from 'react';
import PropTypes from 'prop-types';

class ModalDelete extends React.Component {
    render() {
        const { onDeleteProductCart, product } = this.props;
        return (
            <div className="modal fade" id={`deleteProductToCart${product.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{marginTop: 150}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Bạn muốn xoá sản phẩm này ?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body col-8 mx-auto">
                            <button type="button" className="btn btn-outline-primary btn-lg px-5" data-bs-dismiss="modal">Không</button>&emsp;
                            <button
                                type="button"
                                className="btn btn-danger btn-lg px-5"
                                data-bs-dismiss="modal"
                                onClick={() => onDeleteProductCart(product)}
                            >xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

ModalDelete.propTypes = {
    product: PropTypes.object,
    onDeleteProductCart: PropTypes.func,
};

export default ModalDelete;