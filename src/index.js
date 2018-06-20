import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Route, Router, Switch } from 'react-router-dom';
import browserHistory from './history';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import Auth from './Auth';
import './index.css';
import App from './App';
import PieCharts from './components/piecharts';
import Simplegraph from './components/simplegraph';
import LineGraph from './components/LineGraph';
import AllGraphs from './components/AllGraphs';
import Callback from './components/Callback';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const auth = new Auth();
const handleAuthentication = ({location}) => {
  console.log('index.js')
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/piecharts" component={PieCharts}/>
        <Route exact path="/simplegraph" component={Simplegraph}/>
        <Route exact path="/lineGraph" component={LineGraph}/>
        <Route exact path="/allGraphs" component={AllGraphs}/>
        <Route exact path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props}/>
        }}/>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
