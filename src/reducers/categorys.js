import data from '../data';

const initialState = data.categorys ? data.categorys : [];

const category = (state = initialState) => {
    return [...state]
};

export default category;