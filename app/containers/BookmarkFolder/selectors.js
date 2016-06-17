import { createSelector } from 'reselect';

/**
 * Direct selector to the bookmarkFolder state domain
 */
const selectBookmarkFolderDomain = () => state => state.get('bookmarkFolder');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BookmarkFolder
 */

const selectBookmarkFolder = () => createSelector(
  selectBookmarkFolderDomain(),
  (substate) => substate.toJS()
);

export default selectBookmarkFolder;
export {
  selectBookmarkFolderDomain,
};
