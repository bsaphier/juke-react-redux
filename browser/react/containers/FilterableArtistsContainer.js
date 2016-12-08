import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

const mapStateToProps = state => {
  return {
    list: state.artists.list
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class FilterableArtistsContainer extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.list.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableArtistsContainer);
