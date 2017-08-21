import {combineReducers} from 'redux';
import selection from './selection/reducers';
import commands from './commands/reducers';
import world from './world/reducers';
import eggo from "./eggo/reducers/index";

const rootReducers = combineReducers({
    selection,
    world,
    commands,
    eggo
});

export default rootReducers;