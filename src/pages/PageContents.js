import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from './../components/contents/Product';
import Category from './../components/contents/Category';
import NotFound from '../components/contents/NotFound';
import  {   actFetchProductsRequest, 
            actDeleteProductRequest,
            actAddToCartRequest,
            actSelectCategory } from './../actions/index'


class PageContents extends React.Component {

    componentDidMount() {
        this.props.fetchAllproducts();
    }

    render() {
        let { products, categorys, category, keywords } = this.props;
        let notFound = null;
        if (keywords !== "") {
            products = products.filter((product) => {
                return product.name.toLowerCase().includes(keywords.toLowerCase());
            });
            notFound = (products.length === 0) ? <NotFound /> : null;
        };
        return (
            <>
                <div className="goiyhomnay">
                    <div className="container">
                        <div className="container-margin">
                            <div className="goiyhomnay-header">
                                <div className="title">
                                    <span>GỢI Ý HÔM NAY</span>
                                </div>
                                <div className="option">
                                    <ul className="list">
                                        {this.showCategory(categorys, category)}
                                    </ul>
                                </div>
                            </div>
                            <div className="products">
                                {this.showProducts(products, category)}
                                {notFound}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    showCategory = (categorys, category) => {
        let result = null;
        const { onSelectCategory } = this.props;
        if (categorys.length > 0) {
            result = categorys.map((item, index) => {
                return (
                    <Category
                        item={item}
                        key={index}
                        onSelectCategory={onSelectCategory}
                        category={category}
                    />
                );
            })
        }
        return result;
    };

    showProducts = (products, category) => {
        let result = null;
        let { onAddToCart, onDeleteProduct } = this.props;
        if (products.length > 0) {
            if (category !== "Tất cả sản phẩm") {
                products = products.filter((product) => {
                    return product.category.toLowerCase() === category.toLowerCase();
                });
            };
            result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                        onAddToCart={onAddToCart}
                        onDeleteProduct={onDeleteProduct}
                    />
                );
            });
        };
        return result;
    };
};

PageContents.propTypes = {
    products: PropTypes.array,
    categorys: PropTypes.array,
    category: PropTypes.string,
    keywords: PropTypes.string,
    onAddToCart: PropTypes.func,
    onDeleteProduct: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        categorys: state.categorys,
        category: state.category,
        keywords: state.keywords,
    };
};

const mapDispatchTopProps = (dispatch) => {
    return {
        fetchAllproducts: () => {
            dispatch(actFetchProductsRequest())
        },
        onAddToCart: (id, quantity, cartMessage) => {
            dispatch(actAddToCartRequest(id, quantity, cartMessage))
        },
        onSelectCategory: (category) => {
            dispatch(actSelectCategory(category))
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchTopProps)(PageContents);
