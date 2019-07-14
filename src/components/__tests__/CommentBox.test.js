import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';
import Root from '../../Root'

let wrapped;
beforeEach(() => {
    // enzyme takes our component instance and renders it into our fake DOM created by JSDOM, and returns 
    // object wrapped which is a wrapped version of our component which has additional functionality that 
    // allows us to make assertions about the component that was created
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>);  
    // using enzyme Full DOM rendering here to learn full DOM rendering,
    // otherwise could have used Shallow rendering because CommentBox has no children
})

afterEach(() => {
    wrapped.unmount();
    // When we use the Full DOM rendering of Enzyme, we are sharing the same fake DOM that has been 
    // implemented by the JSDOM library.
    // That means the different components we are creating can potentially interact with each other and
    //  cause issues across our different tests. So after every single test we write, we will make sure 
    // we do clean up. We will unmount the component our test created and mounted onto the fake DOM 
    // after each test, so that it does not interfere with other components created and mounted onto 
    // the fake DOM by other tests
   
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
    beforeEach(() => {
        // simulate the change event, pass in a mock object for target that gets merged into the real event object 
        // that gets passed to our event handler
        // When we simulate an event, it causes enzyme to look at every JSX tag we have added to our component
        // and try to find if that component had an event callback related to the event that we are simulating
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });

        // this.SetState() in react is asynchronous i.e react does not IMMEDIATELY update the state and 
        // re-render (for optimization purposes it can potentially do batch updates of state.
        // This is an issue for testing – because the instant we simulate the change event, right after 
        // that line of code we want to write an expression that immediately looks at that component and 
        // says oh yeah the new value is now available.
        // Hence we need to force our component to automatically re-render itself
        //  (and the new value is shoved into the text area) so that we don’t need to wait for 
        // react to re-render itself because of the asynchronous nature of setState()
        wrapped.update(); //forces component to update immediately (e.g. because calling setState in handleChange)
    });

    it('has a text area that users can type in', () => {  
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('when form is submitted, text area gets emptied', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    
        wrapped.find('form').simulate('submit');
        wrapped.update(); //forces component to update immediately (because calling setState in handleSubmit)
     
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
});

