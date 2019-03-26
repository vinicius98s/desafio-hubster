import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Loading from './Loading';

import Layout from './Layout';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: 'var(--orange)' }} />
        {this.props.loading ? <Loading /> : <Layout />}
      </Fragment>
    )
  }
}

function mapStateToProps({ data }) {
  return {
    loading: !data.categories || !data.products ? true : false
  }
}

export default connect(mapStateToProps)(App);
