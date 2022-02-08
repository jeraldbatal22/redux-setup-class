import { supportPostActionConstants } from '../actions/post_actions';

const initialState = {
    posts: [],
};

const PostReducer = (state = initialState, action) => {
    switch(action.type) {
        case supportPostActionConstants.RECEIVE_POSTS:
            const { posts } = action;

            return {
                ...state,
                posts
                
            };

        default:
            return state;
    }
}

export default PostReducer;