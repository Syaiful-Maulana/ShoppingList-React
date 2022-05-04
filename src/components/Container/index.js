import React from 'react';
import PropTypes from 'prop-types';
import styles from './container.module.css';
function index(props) {
  return <section className={styles.container}>{props.children}</section>;
}
index.propTypes = {
  children: PropTypes.node,
};

export default index;
