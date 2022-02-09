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
    if(this.state.users.length > 0) {
      this.props.clearUsers()
      this.setState({users: []})
    }
    this.props.requestPosts().then(() => {
      this.setState({posts: this.props.posts})
    })
  }

  getUsers = () => {
    if(this.state.posts.length > 0) {
      this.props.clearPosts()
      this.setState({posts: []})
    }
    this.props.requestUsers().then(() => {
      this.setState({users: this.props.users})
    })
  }

  render() {
    return (
      <div className="App" style={{width:'50%', margin:'auto'}}>
        <br/>
        <button onClick={this.getPosts} className="btn_get_posts">GET POSTS</button><br></br><br></br>
        <button onClick={this.getUsers} className="btn_get_users">GET USERS</button>
        <br/>
        <br/>
        <h1>{this.state.posts.length > 0 && 'POSTS LIST'} {this.state.users.length > 0 && 'USERS LIST'}</h1>

        <br/>
        
        <table id="customers">
          <thead>
            <tr style={{ background: this.state.posts.length > 0 ? 'antiquewhite' : this.state.users.length > 0 ? 'aquamarine' : '' }}>
              <th>{this.state.posts.length > 0 ? 'UserId' : this.state.users.length > 0 ? 'Fullname' : ''}</th>
              <th>{this.state.posts.length > 0 ? 'Title' : this.state.users.length > 0 ? 'Email' : ''}</th>
              <th>{this.state.posts.length > 0 ? 'Body' : this.state.users.length > 0 ? 'Phone No.' : ''}</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.posts.length > 0 && this.state.posts.map(post => (
                <tr key={post.id} >
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
              ))
            }

            {
              this.state.users.length > 0 && this.state.users.map(post => (
                <tr key={post.id} >
                    <td>{post.name}</td>
                    <td>{post.email}</td>
                    <td>{post.phone}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      
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