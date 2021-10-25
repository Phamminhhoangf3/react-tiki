import React from 'react';
import PageContents from './pages/PageContents';
import PageCart from './pages/PageCart';
import PageActionsProduct from './pages/PageActionsProduct';
import PageOrder from './pages/PageOrder';

const routers = [
    {
        path: '/',
        exact: true,
        main: () => <PageContents />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <PageCart />
    },
    {
        path: '/add',
        exact: false,
        main: ({history}) => <PageActionsProduct history={history} />
    },
    {
        path: '/products/:id/edit',
        exact: false,
        main: ({match, history}) => <PageActionsProduct match={match} history={history}/>
    },
    {
        path: '/order',
        exact: false,
        main: () => <PageOrder />
    }
];

export default routers;