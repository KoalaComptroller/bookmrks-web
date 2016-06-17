/*
 *
 * BookmarkFolderList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectBookmarkFolderList from './selectors';
import styles from './styles.css';

export class BookmarkFolderList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.bookmarkFolderList}>
      This is BookmarkFolderList container !
      </div>
    );
  }
}

const mapStateToProps = selectBookmarkFolderList();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkFolderList);
