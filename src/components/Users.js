import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    let users = this.props.users.map((user, id) => 
      <li key={id}>{user.username}</li>
    )
    return (
      <div>
        <h3>Number of Users: {this.props.userCount}</h3>
        <ul>
          Users!
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
