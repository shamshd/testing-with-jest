import { createStore } from 'redux';
import rootReducer from '../reducers'; 
// when we import a directory we get the index.js file from within that directory by default

const store = createStore(rootReducer);

export default store;