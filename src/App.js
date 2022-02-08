import './App.css';
import React, { Component } from 'react';
import { requestPosts } from './stores/actions/post_actions';
import { connect } from 'react-redux';

 class App extends Component {

  state = {
    posts:[]
  }
  // simpleAction = () => {
  //   this.props.requestPosts();
  // }

  componentDidMount () {
    this.props.requestPosts().then(() => {
      this.setState({posts: this.props.posts})
    })
  }

  render() {
    console.log(this.state.posts)
    return (
      <div className="App">
        <button onClick={this.simpleAction}>HAHAHAHA</button>
        <pre>
        {
          JSON.stringify(this.props.posts)
        }
        </pre>
      </div>
    )
  }

 
}

const mapStateToProps = state => ({
  posts: state.posts
 })

const mapDispatchToProps = dispatch => ({
  requestPosts: () => dispatch(requestPosts())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);