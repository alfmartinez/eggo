export const heal = ({amount, from}) => ({type: 'EGGO_HEAL', amount, from});
export const hurt = ({amount, from}) => ({type: 'EGGO_HURT', amount, from});