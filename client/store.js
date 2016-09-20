import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'; //syncs react-router with the store
import { browserHistory } from 'react-router'

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
consts defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);
