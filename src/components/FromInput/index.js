import React from 'react';
import PropTypes from 'prop-types';
import styles from './from.module.css';
const index = ({ onSubmit, onChange, value }) => {
  return (
    <form action="" className={styles.form} onSubmit={onSubmit}>
      <input type="text" className={styles.input} onChange={onChange} value={value} placeholder="List" />
      <button className={styles.addButton} type="submit">
        add
      </button>
    </form>
  );
};

index.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default index;
