import React from 'react';
import PropTypes from 'prop-types';

class MessageCart extends React.Component {
    render() {
        const { cartMessage, orderMessage, onCloseMessage } = this.props;
        let message = "";
        if (cartMessage ) {
            message = cartMessage;
        } else if (orderMessage ) {
            message = orderMessage;
        };
        return (
            <div className="messages">
                <p className="message-status">
                    <span className="icon-message">
                        <i className="fas fa-check-circle fa-lg" style={{ color: "rgb(76, 175, 80)" }}></i>
                    </span>
                    { message }
                </p>
                <span className="icon-close-message" onClick={() => onCloseMessage("close")}>
                    <i className="fas fa-times" style={{ color: "rgb(155, 155, 155)" }}></i>
                </span>
                <div className="triangle"></div>
            </div>
        );
    };
};

MessageCart.propTypes = {
    cartMessage: PropTypes.string,
    orderMessage: PropTypes.string,
    onCloseMessage: PropTypes.func,
};

export default MessageCart;
