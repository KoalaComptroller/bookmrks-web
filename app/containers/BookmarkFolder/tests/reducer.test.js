import expect from 'expect';
import bookmarkFolderReducer from '../reducer';
import { fromJS } from 'immutable';

describe('bookmarkFolderReducer', () => {
  it('returns the initial state', () => {
    expect(bookmarkFolderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
