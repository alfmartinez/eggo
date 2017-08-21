import {combineReducers} from 'redux';
import setting from "./setting";
import mobs from "./mobs";
import eggo from "./eggo";

const world = combineReducers({
    setting,
    mobs,
    eggo
})

export default world;