import React from 'react';
import PropTypes from 'prop-types';
import styles from './todos.module.css';
import plusIcon from '../../assets/plus-icon.svg';
import minusIcon from '../../assets/minus-icon.svg';
import classNames from 'classnames';
function index({ onAdditon, onSubstraction, todos }) {
  return (
    <div className={styles.todos}>
      {todos.map((todo, index, arr) => {
        return (
          <div
            key={index}
            className={classNames(styles.todo, {
              [styles.todoDivider]: !(arr.length === index + 1),
            })}
          >
            {todo.title}

            <div className={styles.todoIconWrapper}>
              <div className={styles.todoCount}>{todo.count}</div>

              <button className={styles.todoActionButton} onClick={() => onSubstraction(index)}>
                <img src={minusIcon} alt="Minus Icon" />
              </button>

              <button onClick={() => onAdditon(index)} className={styles.todoActionButton}>
                <img src={plusIcon} alt="Plus Icon" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
index.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  onSubstraction: PropTypes.func,
  onAdditon: PropTypes.func,
};
export default index;
