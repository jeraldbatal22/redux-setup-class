import { clearPostsSuccess, clearUsersSuccess, receivePosts, receiveUsers, supportPostActionConstants } from "../actions/post_actions";
import { doClearPosts, doClearUsers, doFetchPosts, doFetchUsers } from "../services/post_services";

const PostMiddleware = ({ dispatch }) => next => action => {
  let success;
  switch (action.type) {
      case supportPostActionConstants.REQUEST_POSTS:
          success = posts => {
              dispatch(receivePosts(posts))
          }

          return doFetchPosts(success);

      case supportPostActionConstants.REQUEST_USERS:
        success = users => {
            dispatch(receiveUsers(users))
        }

        return doFetchUsers(success);

      case supportPostActionConstants.CLEAR_POSTS:
        success = () => {
            dispatch(clearPostsSuccess())
        }

        return doClearPosts(success);

      case supportPostActionConstants.CLEAR_USERS:
        success = () => {
            dispatch(clearUsersSuccess())
        }

        return doClearUsers(success);

          default:
            return next(action);
  }
  
}
export default PostMiddleware;