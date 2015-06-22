import React, { Component } from 'react';
import FilterableUserList from './FilterableUserList';

export default class App extends Component {
  render() {
    return (
      <FilterableUserList username="react-github" password="BadPassw0rd"/>
    );
  }
}
