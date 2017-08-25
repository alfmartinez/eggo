import {evaluateEggoVelocity, updatePosition} from "./move";
import {checkCollisions} from "./collisions";
import {sqNorm} from "./vector";

let timer;

export const startGame = () => {
    return dispatch => {
        if (!timer) {
            timer = setInterval(() => {
                dispatch(advanceTime());
            }, 50);
            dispatch(continueGame());
            console.log('Starting timer', timer);
        }
    };
};

const continueGame = () => ({type: 'GAME_START'});

export const stopGame = () => {
    clearInterval(timer);
    timer = null;
    return {type: 'GAME_STOP'};
};


const advanceTime = () => {
    return (dispatch, getState) => {
        dispatch(evaluateEggoVelocity());
        const {velocity} = getState().world.eggo;
        if (sqNorm(velocity)) {
            dispatch(checkCollisions());
            dispatch(updatePosition())
        }
    };
};


export const setTarget = ({x, y}) => {
    return {type: 'SET_TARGET', x, y};
};
