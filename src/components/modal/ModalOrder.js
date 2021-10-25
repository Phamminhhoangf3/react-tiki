import React from 'react';
import PropTypes from 'prop-types';
import * as messages from '../../constans/messages';

class ModalOrder extends React.Component {
    render() {
        const { order, totalPrice, onSaveOrder } = this.props;
        const { cartProduct } = order;
        const shipping = 20000
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thông tin đơn hàng</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col" className="text-center" style={{ width: 370 }}>Tên sản phẩm</th>
                                        <th scope="col" className="text-center">Giá (VNĐ)</th>
                                        <th scope="col" className="text-center">Số lượng</th>
                                        <th scope="col" className="text-center">Thành tiền (VNĐ)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showProduct(cartProduct)}
                                    <tr>
                                        <td colSpan="3"></td>
                                        <td className="text-left">Tạm tính (VNĐ):</td>
                                        <td>{totalPrice.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3"></td>
                                        <td className="text-left">Phí vận chuyển (VNĐ):</td>
                                        <td className="text-success">{shipping.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3"></td>
                                        <td className="text-left fw-bold">Thành tiền (VNĐ):</td>
                                        <td className="text-danger">{(totalPrice + shipping).toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer ">
                            <span>(xin vui lòng kiểm tra lại đơn hàng trước khi đặt mua)</span>
                            <button
                                type="button"
                                className="btn btn-danger d-grid gap-2 col-4"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => onSaveOrder(order, messages.ORDER_SUCCESS)}
                            >Đặt mua</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    showProduct = (cartProduct) => {
        let result = [];
        if (cartProduct.length > 0) {
            result = cartProduct.map((cart, index) => {
                return <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td className="text-right">{cart.product.name}</td>
                    <td className="text-center">{cart.product.price.toLocaleString()}</td>
                    <td className="text-center">{cart.quantity}</td>
                    <td className="text-center">{(cart.product.price * cart.quantity).toLocaleString()}</td>
                </tr>
            });
        };
        return result;
    };
};

ModalOrder.propTypes = {
    order: PropTypes.object,
    totalPrice: PropTypes.number,
    onSaveOrder: PropTypes.func,
};

export default ModalOrder;