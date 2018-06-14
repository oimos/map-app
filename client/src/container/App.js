import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import { increment } from '../action/App';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(increment())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)