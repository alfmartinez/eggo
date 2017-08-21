import React from 'react';
import {connect} from 'react-redux';
import {selectMob,selectSetting} from './store/selection/actions';

const displayEggo = ({status}) => (
    <div>{status}</div>
);

const Main = ({world,selectMob,selectSetting}) => (
    <div>
        { world.setting.map(item => <div onClick={() => selectSetting(item)} key={item.id}>{item.type}</div>) }
        { world.mobs.map(item => <span className="egg" onClick={() => selectMob(item)} key={item.id}>{item.type}</span>) }
        { displayEggo(world.eggo) }
    </div>
);

const mapStateToProps = ({world}) => ({world});
const dispatchToProps = {
    selectMob: selectMob,
    selectSetting: selectSetting
};

export default connect(mapStateToProps,dispatchToProps)(Main);