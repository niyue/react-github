import React, { Component } from 'react';

module.exports = React.createClass({
  handleChange: function(event) {
    console.debug('action=location_changed');
    var value = event.target.value === 'shanghai' ? 'shenzhen' : 'shanghai';
    this.props.onUserInput(value);
  },
  
  render: function() {
    return(
      <div class="location-box">
        <input type="submit" value={this.props.location} onClick={this.handleChange} ref="userLocationInput" class="location-input" />
      </div>
    );
  }
});
