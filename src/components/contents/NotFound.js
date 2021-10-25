import React from 'react';

class NotFound extends React.Component {
    render() {
        return (
            <div className="warning-not-found">
                <div className="warning-content">
                    Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn
                </div>
            </div>
        );
    }
}

export default NotFound;
