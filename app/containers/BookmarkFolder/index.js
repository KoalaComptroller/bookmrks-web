/*
 *
 * BookmarkFolder
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectBookmarkFolder from './selectors';
import styles from './styles.css';

export class BookmarkFolder extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.bookmarkFolder}>
      This is BookmarkFolder container !
      </div>
    );
  }
}

const mapStateToProps = selectBookmarkFolder();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkFolder);
