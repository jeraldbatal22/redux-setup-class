import './App.css';
import React, { Component } from 'react';
import { clearPosts, clearUsers, requestPosts, requestUsers } from './stores/actions/post_actions';
import { connect } from 'react-redux';

 class App extends Component {

  state = {
    posts:[],
    users:[]
  }

  getPosts = () => {
    this.props.clearUsers()
    this.setState({users: []})
    this.props.requestPosts().then(() => {
      this.setState({posts: this.props.posts})
    })
  }

  getUsers = () => {
    this.props.clearPosts()
    this.setState({posts: []})
    this.props.requestUsers().then(() => {
      this.setState({users: this.props.users})
    })
  }

  render() {
    return (
      <div className="App" style={{width:'50%', margin:'auto'}}>
        <br/>
        <button onClick={this.getPosts}>GET POSTS</button><br></br><br></br>
        <button onClick={this.getUsers}>GET USERS</button>
        <br/>
        <br/>
        {/* <pre>
        {
          JSON.stringify(this.props.posts)
        }
        </pre> */}
        <br/>
        <h1>{this.state.posts.length > 0 && 'POSTS LIST'} {this.state.users.length > 0 && 'USERS LIST'}</h1>
        {
            this.state.posts.length > 0 && this.state.posts.map(post => (
              <ul key={post.id} style={{listStyle:'none', display:'flex', gap:'10px'}}>
                  <li>{post.title}</li>
                  <li>{post.userId}</li>
              </ul>
            ))
          }
          {
            this.state.users.length > 0 && this.state.users.map(post => (
              <ul key={post.id} style={{listStyle:'none', display:'flex'}}>
                  <li>{post.name}</li>
                  <li>{post.email}</li>
              </ul>
            ))
          }
      </div>
    )
  }

 
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  users: state.posts.users
 })

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts()),
  requestUsers: () => dispatch(requestUsers()),
  clearPosts: () => dispatch(clearPosts()),
  clearUsers: () => dispatch(clearUsers())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);