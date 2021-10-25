import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actFetchAllOrdersRequest, actDeleteOrderRequest } from './../actions/index';
import NoProductOder from '../components/notFound/NoProductOder';
import ModalDeleteOrder from '../components/modal/ModalDeleteOrder';

class PageOrder extends React.Component {
    componentDidMount() {
        this.props.fetchAllOrders();
    };

    render() {
        const { orders } = this.props;
        const noProductOrder = orders.length === 0 ? <NoProductOder /> : null;
        return (
            <div className="order" >
                <div className="container" >
                    <div className="container-margin" >
                        <div className="order-wrapper">
                            <h3>Danh sách đơn hàng</h3>
                            <table className={`table ${orders.length === 0 ? 'd-none' : null}`}>
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ width: 50 }}>OrderID</th>
                                        <th scope="col" style={{ width: 350 }}>Sản phẩm&emsp;&emsp;&emsp;</th>
                                        <th scope="col" className="text-start">&ensp;Giá (VNĐ)</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Tổng</th>
                                        <th scope="col">Thành tiền (VNĐ)</th>
                                        <th scope="col">Ngày giờ</th>
                                        <th scope="col">Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showOrder(orders)}
                                </tbody>
                            </table>
                                    {noProductOrder}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    showOrder = (orders) => {
        let result = [];
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                const cartProduct = order.cartProduct;
                const { onDeleteOrder } = this.props;
                return  <tr key={index}>
                            <th scope="row" className="fw-normal">{order.orderID}</th>
                            <td className="text-start text-break">{this.showName(cartProduct, "name")}</td>
                            <td className="text-start">{this.showName(cartProduct, "price")}</td>
                            <td>{this.showName(cartProduct, "quantity")}</td>
                            <td>{this.showTotal(cartProduct, "totalQuantity")}</td>
                            <td>{this.showTotal(cartProduct, "totalPrice").toLocaleString()}</td>
                            <th className="fw-normal">{order.date}</th>
                            <th>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#deleteOrder${order.orderID}`}
                                >Hủy đơn</button>
                                <ModalDeleteOrder onDeleteOrder={onDeleteOrder}  orderID={order.orderID}/> 
                            </th>
                        </tr>
            });
        };
        return result;
    };

    showName(cartProduct, value) {
        let result = null;
        result = cartProduct.map((item, index) => {
            switch (value) {
                case ("name"):
                    return <span key={index}>- {item.product.name}<br /></span>
                case ("price"):
                    return <span key={index}>- {item.product.price.toLocaleString()}<br /></span>
                case ("quantity"):
                    return <span key={index}>({item.quantity})<br /></span>
                default: return null;
            };
        });
        return result;
    };

    showTotal(cartProduct, value) {
        let result = 0;
        if (value === "totalQuantity") {
            for (let i = 0; i < cartProduct.length; i++) {
                result += cartProduct[i].quantity;
            };
        } else if (value === "totalPrice") {
            for (let i = 0; i < cartProduct.length; i++) {
                result += (cartProduct[i].quantity * cartProduct[i].product.price);
            };
        }
        return result;
    };
};

PageOrder.propTypes = {
    orders: PropTypes.array,
};

const mapStateToprops = (state) => {
    return {
        orders: state.orders
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        fetchAllOrders: () => {
            dispatch(actFetchAllOrdersRequest());
        },
        onDeleteOrder: (id) => {
            dispatch(actDeleteOrderRequest(id));
        }
    };
};

export default connect(mapStateToprops, mapDispatchToprops)(PageOrder);
