import { saveComment } from '../../actions';
// import from a directory by default imports from index.js within that directory

import { SAVE_COMMENT } from '../../actions/types';

describe('saveComment', () => {
    it('has the correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    });
})