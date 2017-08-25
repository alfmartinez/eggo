const initialState = [{
    id: "mob1",
    cx: 200,
    cy: 200,
    r: 10,
    stroke: "red",
    strokeWidth: 3,
    behaviors: {
        default: 'bounce'
    },
    fill: "red"
},{
    id: "mob2",
    cx: 600,
    cy: 200,
    r: 10,
    stroke: "green",
    strokeWidth: 3,
    behaviors: {
        default: 'heal'
    },
    fill: "green"
}];

const mobs = (state = initialState, action) => {
    return state;
};

export default mobs;