export const setTarget = ({x,y}) => {
    console.log({x,y});
    return {type: 'SET_TARGET', x, y};
};