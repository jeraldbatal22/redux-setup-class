import {combineReducers} from 'redux';
import PostReducer from './reducers/post_reducers';

const RootReducer = combineReducers({
  posts: PostReducer
});

export default RootReducer;