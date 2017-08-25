import {multiplyToInt, normalize, vectorsAreEqual} from "./vector";

export const evaluateEggoVelocity = () => {
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
                dispatch(setVelocity(multiplyToInt(normalize(vector), speed)));
            } else {
                dispatch(stopEggo());
            }
        }
    };
};

export const updatePosition = () => {
    return {type: 'EGGO_MOVE'};
};

export const setVelocity = (vector) => {
    return {type: 'SET_VELOCITY', vector};
};

export const stopEggo = () => {
    return {type: 'EGGO_STOP'};
};

