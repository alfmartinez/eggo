const initialState = {
    cx: 400,
    cy: 200,
    r: 10,
    stroke: "black",
    strokeWidth: 3,
    fill: "white",
    heading: null
};

const eggo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TARGET':
            const {x,y} = action;
            return {
                ...state,
                heading: {x,y}
            };
        default:
        return state;
    }
};

export default eggo;