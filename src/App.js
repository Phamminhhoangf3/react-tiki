import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './sass/css/style.css';
import routers from './routers';
import PageHeader from './pages/PageHeader';
import Footer from './components/footer/Footer';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <PageHeader />
                    <Switch>
                        {this.showContents(routers)}
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    };

    showContents = (routers) => {
        let result = null;
        if (routers.length > 0) {
            result = routers.map((router, index) => {
                return <Route
                    key={index}
                    path={router.path}
                    exact={router.exact}
                    component={router.main}
                />
            })
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
