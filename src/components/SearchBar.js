import _ from 'lodash';
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react'

const source = [
  {
    "title": "Bashirian, Sipes and Roob",
    "description": "Diverse fault-tolerant ability",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg",
    "price": "$99.09"
  },
  {
    "title": "Eichmann LLC",
    "description": "Grass-roots grid-enabled secured line",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/skkirilov/128.jpg",
    "price": "$90.45"
  },
  {
    "title": "Ebert, Turner and D'Amore",
    "description": "Progressive bandwidth-monitored open architecture",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/michaelkoper/128.jpg",
    "price": "$9.70"
  },
  {
    "title": "Prosacco, White and Williamson",
    "description": "Face to face value-added benchmark",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/louis_currie/128.jpg",
    "price": "$6.20"
  },
  {
    "title": "Bernier Inc",
    "description": "Customer-focused incremental utilisation",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/samgrover/128.jpg",
    "price": "$81.01"
  }
]

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {

  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search size='big' aligned='right'
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        {...this.props}
      />
    )
  }
}

export default SearchBar;
