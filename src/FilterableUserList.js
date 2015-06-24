import React, { Component } from 'react';
import UserList from './UserList';
import UserGrid from './UserGrid';
import LocationBox from './LocationBox';
import $ from 'jquery';

// var USERS = [];
// for(var i = 0; i < 200; i++) {
//   USERS.push({'login': `u${i}`, 'html_url': `http://example.com/u${i}`})  
// }
    
var USERS = [];

module.exports = React.createClass({
  getInitialState: function() { 
    return {
      location: 'shanghai',
      pendingSearch: null,
      users: USERS
    }; 
  },
  
  searchUsers: function(location) {
    // this.setState({users: USERS});
    this.setState({pendingSearch: null});
    //var url = `https://api.github.com/search/users?q=location:${location}+repos:>=10`;
    var url = `/assets/${location}.json`;
    console.log('action=search_users url=%s', url);
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      username: this.props.username,
      password: this.props.password,
      success: function(data) {
        console.debug('action=users_retrieved users=%s', data.items.length);
        this.setState({users: data.items});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });    
  },
  
  componentDidMount: function() {
    this.searchUsers(this.state.location);
  },
  
  handleLocationChange: function(location) {
    if(this.state.pendingSearch) {
      clearTimeout(this.state.pendingSearch);
    }
    var that = this;
    var pendingSearch = setTimeout(function() {that.searchUsers(location)}, 500);
    this.setState({location: location, pendingSearch: pendingSearch});
  },
  
  render: function() {
    return (
      <div class="filterable-user-list">
        <LocationBox location={this.state.location} onUserInput={this.handleLocationChange}/>
        <UserList users={this.state.users} key="users-list" />
      </div>
    );
  }
});
