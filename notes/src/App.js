import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import PageWrapper from './Components/PageWrapper';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contribute from './Components/Pages/Contribute';
import Login from './Components/Pages/Login';
import './App.css';
import SignUp from './Components/Pages/SignUp';
import Notes from './Components/App/Notes';


import { Provider } from 'react-redux';
import store from './store';

import jwt_decode from "jwt-decode";
import setAuthToken  from './utils/setAuthToken';
import { setCurrentUser, logoutUser} from './actions/authActions';

import PrivateRoute from './Components/PrivateRoute';

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/notes" component={Notes} />
            <Route path="/login" component={Login} history={useHistory}></Route>
            <Route path="/signup" component={SignUp} history={useHistory}></Route>
            <PageWrapper>
              <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/contribute" component={Contribute}></Route>
              <Route path="/" component={Home}></Route>
              </Switch>
            </PageWrapper>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
