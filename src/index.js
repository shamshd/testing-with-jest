import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

import App from './components/App';

ReactDOM.render(
    <Root>
        <App />
    </Root>
    , document.getElementById('root'));

    // When our application first starts up, its going to try to render an instance of the <Root/> component
    // and the App/> component will be passed to the <Root/> component as a child, so when the Root component 
    // gets rendered it will receive the App component on the props property of props.children