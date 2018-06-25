import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/layouts/Home.jsx';
import About from './components/layouts/About.jsx';
import Layout from './components/layouts/Layout.jsx';
import NewsItemDetail from './components/presentation/NewsItemDetail.jsx';
import { Provider } from 'react-redux';
import store from './stores/store.js';
import NewsArticle from './components/containers/NewsArticle.jsx';

export default class AppComp extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path='/news/:id' component={NewsArticle}/>
                </Layout>
            </BrowserRouter>
        </Provider>
       );
  }
}

