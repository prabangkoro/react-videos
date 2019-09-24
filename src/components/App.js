import React, { Component } from 'react'
import SearchBar from './SearchBar'

export default class App extends Component {
  onFormSubmit = keyword => {
    console.log(keyword)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    )
  }
}
