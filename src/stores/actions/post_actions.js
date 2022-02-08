export const supportPostActionConstants = {
  REQUEST_POSTS: 'REQUEST_POSTS',
  RECEIVE_POSTS: 'RECEIVE_POSTS',
  CLEAR_POSTS: 'CLEAR_POSTS',
  CLEAR_POSTS_SUCCESS: 'CLEAR_POSTS_SUCCESS',

  REQUEST_USERS: 'REQUEST_USERS',
  RECEIVE_USERS: 'RECEIVE_USERS',
  CLEAR_USERS: 'CLEAR_USERS',
  CLEAR_USERS_SUCCESS: 'CLEAR_USERS_SUCCESS',
}

export const requestPosts = () => {
  return {
    type: supportPostActionConstants.REQUEST_POSTS,
  }
};

export const receivePosts = (posts) => ({
  type: supportPostActionConstants.RECEIVE_POSTS,
  posts
});

export const clearPosts = () => ({
  type: supportPostActionConstants.CLEAR_POSTS,
});

export const clearPostsSuccess = () => ({
  type: supportPostActionConstants.CLEAR_POSTS_SUCCESS,
});




export const requestUsers = () => {
  return {
    type: supportPostActionConstants.REQUEST_USERS,
  }
};

export const receiveUsers = (users) => {
  return {
    type: supportPostActionConstants.RECEIVE_USERS,
    users
  }
};

export const clearUsers = () => ({
  type: supportPostActionConstants.CLEAR_USERS,
});

export const clearUsersSuccess = () => ({
  type: supportPostActionConstants.CLEAR_USERS_SUCCESS,
});
