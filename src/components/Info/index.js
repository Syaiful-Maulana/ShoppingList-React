import React from 'react';
import PropTypes from 'prop-types';
import styles from './info.module.css';
function index({ todosLength, totalCounts, onDelete }) {
  return (
    <div className={styles.info}>
      <div className={styles.infoTotal}>
        <p>{`Total List: ${todosLength}`}</p>
      </div>
      <div className={styles.infoTotal}>
        <p> {`Total Count: ${totalCounts}`}</p>
      </div>
      <button onClick={onDelete} className={styles.deleteAllButton}>
        <p>Delete All List</p>
      </button>
    </div>
  );
}
index.propTypes = {
  todosLength: PropTypes.number,
  totalCounts: PropTypes.number,
  onDelete: PropTypes.func,
};
export default index;
