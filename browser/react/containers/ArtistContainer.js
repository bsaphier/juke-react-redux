import { connect } from 'react-redux';
import Artist from '../components/Artist';

import { toggleSong } from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    children: ownProps.children.props.children,
    selectedArtist: state.artists.selected,
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPLaying: state.player.isPlaying,
    progress: state.player.progress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleOne: (song, list) => dispatch(toggleSong(song, list))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
