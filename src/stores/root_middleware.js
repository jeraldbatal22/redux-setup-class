import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PostMiddleware from './middleware/post_middleware';

const RootMiddleware = applyMiddleware(
    thunk,
    PostMiddleware,
);

export default RootMiddleware;