import _ from 'lodash';
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react'
import source from '../assets/SearchData.json';

class SearchBarDefault extends Component {
  constructor(props) {
    super(props);
    this.handleResultSelect = this.handleResultSelect.bind(this);
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    this.props.onSearchResultClick(result.key);
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)

      const filteredResults = _.reduce(source, (memo, data, name) => {
        const results = _.filter(data.results, isMatch)
        if (results.length) memo[name] = { name, results } // eslint-disable-line no-param-reassign

        return memo
      }, {})

      this.setState({
        isLoading: false,
        results: filteredResults,
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search aligned='right'
        category
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        categoryRenderer={this.props.categoryRenderer}
        resultRenderer={this.props.resultRenderer}
      />
    )
  }
}

const categoryRenderer = ({ name }) => <div key={name} className="name">Floor {name}</div>

categoryRenderer.propTypes = {
  name: PropTypes.string,
}

const resultRenderer = ({ name, lift }) => <div><div className="price">{ (lift != null && lift != "") ? "Lift " + lift : "" }</div><div className="title">{ name.match(/^\d/) ? "Room" + name : name }</div></div>

resultRenderer.propTypes = {
  name: PropTypes.string,
  lift: PropTypes.string,
}

const SearchBar = (props) => (
  <SearchBarDefault
    categoryRenderer={categoryRenderer}
    resultRenderer={resultRenderer}
    onSearchResultClick={props.onSearchResultClick}
  />
)

export default SearchBar;
