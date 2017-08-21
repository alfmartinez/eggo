import {combineReducers} from 'redux';
import selection from './selection/reducers';

const rootReducers = combineReducers({
    selection
});

export default rootReducers;