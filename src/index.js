import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import browserHistory from './history';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import Auth from './Auth';
import 'react-vis/dist/style.css';
import './index.css';

import App from './App';
import PieCharts from './components/piecharts';
import Simplegraph from './components/simplegraph';
import LineGraph from './components/LineGraph';
import AllGraphs from './components/AllGraphs';
import Callback from './components/Callback';
import SingleRepoNCommits from './components/Zoom2Graphs/SingleRepoNCommits';
import TeamAdditionsDeletions from './components/Zoom2Graphs/TeamAdditionsDeletions';
import SingleUserNCommits from './components/Zoom2Graphs/SingleUserNCommits';
import CustomGoogleMap from './components/Maps/CustomGoogleMap';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const auth = new Auth();
const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    (localStorage.getItem("access_token") && localStorage.getItem("email"))? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/piecharts" component={PieCharts}/>
        <Route exact path="/simplegraph" component={Simplegraph}/>
        <Route exact path="/lineGraph" component={LineGraph}/>
        <Route exact path="/googleMap" component={CustomGoogleMap}/>
        <PrivateRoute exact path="/allGraphs" component={AllGraphs}/>
        <Route exact path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props}/>
        }}/>
        <PrivateRoute exact path="/singleRepoNCommits/:repo" component={SingleRepoNCommits}/>
        <PrivateRoute exact path="/teamAdditionsDeletions/:team" component={TeamAdditionsDeletions}/>
        <PrivateRoute exact path="/singleUserNCommits/:label" component={SingleUserNCommits}/>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
