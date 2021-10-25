import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
    render() {
        const { item, category, onSelectCategory } = this.props;
        return (
            <li 
                className={`item ${item.name === category ? "active" : ""}`} 
                onClick={() => {
                    window.scrollTo(0, 0);
                    return onSelectCategory(item.name)
                }}
            >
                <div className="link">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                </div>
            </li>
        );
    };
};

Category.propTypes = {
    item: PropTypes.object,
    category: PropTypes.string,
    onSelectCategory: PropTypes.func,
};

export default Category;
