import { receivePosts, supportPostActionConstants } from "../actions/post_actions";
import { doFetchPosts } from "../services/post_services";

const PostMiddleware = ({ dispatch }) => next => action => {
  let success;
  switch (action.type) {
      case supportPostActionConstants.REQUEST_POSTS:
          success = posts => {
              dispatch(receivePosts(posts))
          }

          return doFetchPosts(success);

          default:
            return next(action);
  }
  
}
export default PostMiddleware;