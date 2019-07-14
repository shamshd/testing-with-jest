import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    // passing in an empty object essentially counts as passing in an action with an unknown type 
    // because the empty object has no type property
    const newState = commentsReducer([], {});
    // or  commentsReducer([], {type: 'GOOONGADUNGA'});

    expect(newState).toEqual([]);


});