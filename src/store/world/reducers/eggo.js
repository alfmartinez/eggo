const initialState = {
    cx: 400,
    cy: 200,
    r: 10,
    stroke: "black",
    strokeWidth: 3,
    fill: "white",
    heading: null,
    speed: 5
};

const eggo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TARGET':
            const {x,y} = action;
            return {
                ...state,
                heading: {x,y}
            };
        case 'EGGO_MOVE':
            const {vector} = action;
            const cx = state.cx + vector.x;
            const cy = state.cy + vector.y;
            return {
                ...state,
                cx,
                cy
            };
        case 'EGGO_STOP':
            return {
                ...state,
                heading: null
            };
        default:
        return state;
    }
};

export default eggo;