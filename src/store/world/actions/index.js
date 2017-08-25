let timer;

export const startGame = () => {
    return dispatch => {
        timer = setInterval(() => {
            dispatch(advanceTime());
        }, 1000);
        dispatch(unpauseGame());
    };
};

const unpauseGame = () => ({type: 'GAME_START'});

export const stopGame = () => {
    clearInterval(timer);
    return {type: 'GAME_STOP'};
};


const advanceTime = () => {
    return dispatch => {
        dispatch(moveMobs());
    };
};


export const setTarget = ({x, y}) => {
    console.log({x, y});
    return {type: 'SET_TARGET', x, y};
};

const moveMobs = () => ({type: 'MOVE_MOBS'});