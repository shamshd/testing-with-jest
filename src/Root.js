import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';

export default props => {
    return(
        <Provider store = { store }>
            {props.children}
        </Provider>
    );
};

// The Root component allows us to create a Provider tag with a redux store and on the fly 
// we can swap out the child component to be placed inside the <Provider> tags