import React from 'react';
import PropTypes from 'prop-types';

class HeaderSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: "",
        };
    };

    onChange = (event) => {
        this.setState({
            keywords: event.target.value.trim(),
        });
    };

    onSearch = () => {
        const { keywords } = this.state;
        this.props.onSearchProduct(keywords);
    };

    onEnter = (event) => {
        if (event.which === 13) {
            const { keywords } = this.state;
            this.props.onSearchProduct(keywords);
        };
    };

    render() {
        return (
            <div className="search-container">
                <div className="form-search flex-row">
                    <input
                        className="input-search"
                        type="text"
                        placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                        onChange={this.onChange}
                        onKeyUp={this.onEnter}
                    />
                    <button
                        className="button-search"
                        type="submit"
                        onClick={this.onSearch}
                    >
                        <img className="icon-search" src="./images/icon/search.png" alt="" />
                        Tìm kiếm
                    </button>
                </div>
            </div>);
    };
};

HeaderSearch.propTypes = {
    onSearchProduct: PropTypes.func,
};

export default HeaderSearch;
