import {distance, normalize, scalarProduct, vectorSub} from "./vector";
import {setVelocity, stopEggo} from "./move";
import {heal, hurt} from "./health";

export const checkCollisions = () => {
    return (dispatch, getState) => {
        const {mobs, eggo} = getState().world;
            mobs.forEach(mob => {
                const distance = distanceBetween(eggo, mob);
                const normal = vectorSub(getPosition(mob), getPosition(eggo));
                const product = scalarProduct(normal, eggo.velocity);
                const contact = contactDistance(eggo, mob);
                if (distance <= contact) {
                    if (product > 0) {
                        dispatch(collisionDetected(eggo, mob, normalize(normal)));
                    }
                }
            });
    };
};

const inverseAndMultiply = ({x,y}, f) => {
    return {
        x: -x*f,
        y: -y*f
    };
}

const collisionDetected = (a, b, normal) => {
    return dispatch => {
        switch(b.behaviors.default) {
            case 'bounce':
                dispatch(setVelocity(inverseAndMultiply(normal, 10)));
                dispatch(hurt({amount: 64, from: b}));
                break;
            case 'heal':
                dispatch(heal({amount: 64, from: b}));
                dispatch(stopEggo());
                break;
            default:
        }

    };
};

// Utility
const getPosition = (a) => {
    return {
        x: a.cx,
        y: a.cy
    };
};

const distanceBetween = (a, b) => {
    return distance(getPosition(a), getPosition(b));
};

const contactDistance = (a, b) => {
    return a.r + b.r + 3;
}
