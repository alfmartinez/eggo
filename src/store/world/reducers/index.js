import {combineReducers} from 'redux';
import setting from "./setting";
import mobs from "./mobs";
import eggo from "./eggo";

const paused = (state = true, action) => {
    switch(action.type) {
        case 'GAME_START':
            return false;
        case 'GAME_STOP':
            return true;
        default:
            return state;
    }
}

const world = combineReducers({
    setting,
    mobs,
    eggo,
    paused
})

export default world;