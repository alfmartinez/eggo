const selection = (state = null, action) => {
    switch(action.type){
        case 'SELECT_MOB':
            const {mob} = action;
            return mob;
        case 'SELECT_SETTING':
            const {setting} = action;
            return setting;
        default:
            return state;
    }
};

export default selection;