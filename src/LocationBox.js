import React, { Component } from 'react';

module.exports = React.createClass({
  handleChange: function(event) {
    this.props.onUserInput(event.target.value);
  },
  
  render: function() {
    return(
      <div>
        <input value={this.props.location} onChange={this.handleChange} ref="userLocationInput" />
      </div>
    );
  }
});
