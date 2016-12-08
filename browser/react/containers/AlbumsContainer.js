import { connect } from 'react-redux';

import Albums from '../components/Albums';

const mapStateToProps = state => {
  return {
    albums: state.albums.list
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);

export default AlbumsContainer;
