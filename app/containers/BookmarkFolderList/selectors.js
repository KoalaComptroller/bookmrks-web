import { createSelector } from 'reselect';

/**
 * Direct selector to the bookmarkFolderList state domain
 */
const selectBookmarkFolderListDomain = () => state => state.get('bookmarkFolderList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BookmarkFolderList
 */

const selectBookmarkFolderList = () => createSelector(
  selectBookmarkFolderListDomain(),
  (substate) => substate.toJS()
);

export default selectBookmarkFolderList;
export {
  selectBookmarkFolderListDomain,
};
