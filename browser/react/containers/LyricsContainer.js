import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../store';
import Lyrics from '../components/Lyrics';
import { searchLyrics } from '../action-creators/lyrics';


const mapStateToProps = state => {
  return {
    lyrics: state.lyrics
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: ev => {
      ev.preventDefault();
      if (ownProps.artistQuery && ownProps.songQuery) {
        dispatch(searchLyrics(ownProps.artistQuery, ownProps.songQuery));
      }
    }
  };
};

class LyricsContainer extends Component {

  constructor() {
    super();
    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  // handleSubmit(ev) {
  //   ev.preventDefault();
  //   if (this.state.artistQuery && this.state.songQuery) {
  //     store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
  //   }
  // }

  render() {
    console.log('PROPS', this.props);
    return (
      <Lyrics
        {...this.state}
        lyrics={this.props.lyrics}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.props.handleSubmit}
      />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LyricsContainer);
