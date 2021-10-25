import React from 'react';
import PropTypes from 'prop-types';

class ModalDeleteOrder extends React.Component {
    render() {
        const { onDeleteOrder, orderID } = this.props;
        return (
            <div className="modal fade" id={`deleteOrder${orderID}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{marginTop: 150}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Bạn có chắc chắn hủy đơn hàng này ?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body col-8 mx-auto">
                            <button type="button" className="btn btn-outline-primary btn-lg px-5" data-bs-dismiss="modal">Không</button>&emsp;
                            <button
                                type="button"
                                className="btn btn-danger btn-lg px-5"
                                data-bs-dismiss="modal"
                                onClick={() => onDeleteOrder(orderID)}
                            >Hủy</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

ModalDeleteOrder.propTypes = {
    onDeleteOrder: PropTypes.func,
    orderID: PropTypes.string,
};

export default ModalDeleteOrder;