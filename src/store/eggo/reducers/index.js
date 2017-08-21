import {combineReducers} from 'redux';
import beliefs from "./beliefs";
import experiences from "./experiences";
import health from "./health";

const eggo = combineReducers({
    beliefs,
    experiences,
    health
});

export default eggo;