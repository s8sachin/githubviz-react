import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import browserHistory from './history';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import  PieCharts from './components/piecharts';
import  Simplegraph from './components/simplegraph';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/piecharts" component={PieCharts}/>
        <Route exact path="/simplegraph" component={Simplegraph}/>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
