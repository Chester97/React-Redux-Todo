import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

const store = createStore(rootReducer, devToolsEnhancer());
store.subscribe(() => console.log("Store has changed: ", store));

export default store;
