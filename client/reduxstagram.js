import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './component/App';
import Single from './component/Single';
import PhotoGrid from './component/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store'; //store since it's a default export. { history } since it's a named export

const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>
    </Route>
  </Router>
  </Provider>
)

render(router, document.getElementById('root'));
