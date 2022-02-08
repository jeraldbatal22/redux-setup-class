import { supportPostActionConstants } from '../actions/post_actions';

const initialState = {
    posts: [],
    users:[]
};

const PostReducer = (state = initialState, action) => {
    switch(action.type) {
        case supportPostActionConstants.RECEIVE_POSTS:
            const { posts } = action;

            return {
                ...state,
                posts
                
            };

        case supportPostActionConstants.RECEIVE_USERS:
            const { users } = action;
            return {
                ...state,
                users
            };

        case supportPostActionConstants.CLEAR_POSTS_SUCCESS:
            return {
                ...state,
                posts: []
            }

        case supportPostActionConstants.CLEAR_USERS_SUCCESS:
            return {
                ...state,
                users: []
            }

        default:
            return state;
    }

     

}

export default PostReducer;