import React from 'react';
import {connect} from 'react-redux';
import {selectMob,selectSetting} from './store/selection/actions';

const displayEggo = (props) => (
    <circle {...props}/>
);

const Main = ({world,selectMob,selectSetting}) => (
    <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect width="750"
              height="400"
              fill="beige"
              />
        { world.setting.map(item => <circle {...item} key={item.id} />) }
        { world.mobs.map(item => <circle {...item} key={item.id} />) }
        { displayEggo(world.eggo) }
    </svg>
);

const mapStateToProps = ({world}) => ({world});
const dispatchToProps = {
    selectMob: selectMob,
    selectSetting: selectSetting
};

export default connect(mapStateToProps,dispatchToProps)(Main);