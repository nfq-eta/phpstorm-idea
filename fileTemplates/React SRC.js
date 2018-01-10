import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Component = (props) => (
  <div></div>
);

Component.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);