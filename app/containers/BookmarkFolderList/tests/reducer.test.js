import expect from 'expect';
import bookmarkFolderListReducer from '../reducer';
import { fromJS } from 'immutable';

describe('bookmarkFolderListReducer', () => {
  it('returns the initial state', () => {
    expect(bookmarkFolderListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
