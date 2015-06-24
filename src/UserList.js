import React, { Component } from 'react';
import User from './User';
import UserListCaption from './UserListCaption';
import $ from 'jquery';

module.exports = React.createClass({
  shouldComponentUpdate: function (nextProps, nextState) {
    console.log('action=should_user_list_component_update users=%s', this.props.users.length);
    return true;
  },
  
  render: function() {
    var users = this.props.users.map(function (user) {
        return (
            <div>
              <User user={user} key={user.login}/>
            </div>
        );
    });
    return (
      <div class="users-list">
        <UserListCaption />
        <dl class="users">
          {users}
        </dl>
      </div>
    );
  }
});
