import React from "react"

class SearchBar extends React.Component {
  state = { term: "" }

  onInputChange = e => {
    // console.log("changing")
    this.setState({ term: e.target.value })
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.term)
    this.setState({ term: "" })
    // Make cb from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar