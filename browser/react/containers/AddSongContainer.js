import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddSong from '../components/AddSong';
import { loadAllSongs, addSongToPlaylist } from '../action-creators/playlists';


const mapStateToProps = state => {
  return {
    playlistId: state.playlists.selected.id,
    songs: state.songs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSongToPlaylist: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId)),
    loadAllSongs: () => dispatch(loadAllSongs())
  };
};

class AddSongContainer extends Component {

  constructor() {
    super();
    this.state = {
      songId: 1,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.loadAllSongs();
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const playlistId = this.props.playlistId;
    const songId = this.state.songId;
    this.props.addSongToPlaylist(playlistId, songId)
      .catch(() => this.setState({ error: true }));
  }

  render() {
    return (
      <AddSong
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSongContainer);
