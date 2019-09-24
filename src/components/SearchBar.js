import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    keyword: ''
  }

  onKeywordChange = e => {
    this.setState({ keyword: e.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.onSubmit(this.state.keyword)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.keyword}
              onChange={this.onKeywordChange}
            />
          </div>
        </form>
      </div>
    )
  }
}
