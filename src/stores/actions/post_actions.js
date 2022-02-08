export const supportPostActionConstants = {
  REQUEST_POSTS: 'REQUEST_POSTS',
  RECEIVE_POSTS: 'RECEIVE_POSTS',
}

export const requestPosts = () => {
  return {
    type: supportPostActionConstants.REQUEST_POSTS,
  }
};

// export const requestPosts = (postData) => (dispatch) => {
//   dispatch({
//     type: supportPostActionConstants.REQUEST_POSTS,
//     payload: postData,
//   });
// };

export const receivePosts = (posts) => ({
  type: supportPostActionConstants.RECEIVE_POSTS,
  posts
});

// console.log(requestPosts)