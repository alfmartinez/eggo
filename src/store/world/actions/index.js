let timer;

export const startGame = () => {
    return dispatch => {
        timer = setInterval(() => {
            dispatch(advanceTime());
        }, 50);
        dispatch(continueGame());
    };
};

const continueGame = () => ({type: 'GAME_START'});

export const stopGame = () => {
    clearInterval(timer);
    return {type: 'GAME_STOP'};
};


const advanceTime = () => {
    return dispatch => {
        dispatch(handleEggoMove());
    };
};


export const setTarget = ({x, y}) => {
    return {type: 'SET_TARGET', x, y};
};

export const moveEggoTowards = (vector) => {
    return {type: 'EGGO_MOVE', vector};
}

export const stopEggo = () => {
    return {type: 'EGGO_STOP'};
}

const handleEggoMove = () => {
    return (dispatch,getState) => {
        const {heading, cx, cy, speed} = getState().world.eggo;
        const position = {
            x: cx,
            y: cy
        };
        if (heading) {
            const vector = {
                x: heading.x - position.x,
                y: heading.y - position.y
            };

            if (!vectorsAreEqual(position,heading, speed)) {
                dispatch(moveEggoTowards(multiplyToInt(normalize(vector), speed)));
            } else {
                dispatch(stopEggo());
            }
        }
    };
};

// Utility functions
const normalize = ({x,y}) => {
    const factor = Math.sqrt(1/(x*x+y*y));
    return {
        x: x*factor,
        y: y*factor
    };
};

const distance = (a,b) => {
    const x = a.x - b.x;
    const y = a.y - b.y;
    return Math.sqrt(x*x+y*y);
};

const vectorsAreEqual = (a, b, tolerance) => {
    return distance(a,b)<tolerance;
};

const multiplyToInt = ({x,y}, factor) => ({
    x: Math.round(x*factor),
    y: Math.round(y*factor)
});