import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;
beforeEach(() => {
    // ie object we got back is a wrapped version of our <App/> component
    // wrapped means this component has additional functionality loaded on top
    wrapped = shallow(<App/>);

})
//beforeEach only applies to all tests in this file

it('shows a comment box', () => {
    // find returns an array containing every instance of CommentBox that was found
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {

    // find returns an array containing every instance of CommentList that was found
    expect(wrapped.find(CommentList).length).toEqual(1);
});