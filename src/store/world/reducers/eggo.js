const nullVector = {x: 0, y: 0};

const initialState = {
    cx: 400,
    cy: 200,
    r: 10,
    stroke: "black",
    strokeWidth: 3,
    fill: "rgb(128,128,128)",
    heading: null,
    velocity: nullVector,
    speed: 2,
    health: 128
};

const hurl = ({amount}, state) => {
    return updateHealth(state, state.health - amount);
};

const heal = ({amount}, state) => {
    return updateHealth(state, state.health + amount);
};

const updateHealth = (state, health) => ({
    ...state,
    health,
    fill: "rgb(" + health + "," + health + "," + health + ")"
});

const eggo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TARGET':
            const {x, y} = action;
            return {
                ...state,
                heading: {x, y}
            };
        case 'SET_VELOCITY':
            const {vector} = action;
            return {
                ...state,
                velocity: vector
            };
        case 'EGGO_MOVE':
            const {velocity} = state;
            const cx = state.cx + velocity.x;
            const cy = state.cy + velocity.y;
            return {
                ...state,
                cx,
                cy
            };
        case 'EGGO_STOP':
            return {
                ...state,
                heading: null,
                velocity: nullVector
            };
        case 'EGGO_HURT':
            return hurl(action, state);
        case 'EGGO_HEAL':
            return heal(action, state);
        default:
            return state;
    }
};

export default eggo;