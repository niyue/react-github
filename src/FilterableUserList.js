import React, { Component } from 'react';
import UserList from './UserList';
import LocationBox from './LocationBox';
import $ from 'jquery';

module.exports = React.createClass({
  getInitialState: function() { 
    return {
      location: 'Shanghai',
      users: []
    }; 
  },
  
  searchUsers: function(location) {
    var url = `https://api.github.com/search/users?q=location:${location}+repos:>=10`;
    //var url = `/assets/${location}.json`;
    console.log('event=search_users url=%s', url);
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      username: this.props.username,
      password: this.props.password,
      success: function(data) {
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
    this.setState({location: location});
    this.searchUsers(this.state.location);
  },
  
  render: function() {
    return (
      <div>
        <LocationBox location={this.state.location} onUserInput={this.handleLocationChange}/>
        <UserList users={this.state.users} />
      </div>
    );
  }
});