import React from 'react';
import {connect} from 'react-redux';
import {selectMob, selectSetting} from './store/selection/actions';
import {setTarget} from './store/world/actions';
import {Panel} from "react-bootstrap";

let point, svg;

const displayEggo = ({heading, ...props}) => (
    <circle {...props}/>
);

function getClickedPosition(evt) {
    point.x = evt.clientX;
    point.y = evt.clientY;
    var cursorpt = point.matrixTransform(svg.getScreenCTM().inverse());
    return cursorpt;
}

const Main = ({world, selectMob, selectSetting, setTarget}) => (
    <Panel>
        <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 750 400"
            ref={ref => {
                if (ref) {
                    point = ref.createSVGPoint();
                }
                svg = ref;
            }}
        >
            <rect width="750"
                  height="400"
                  fill="beige"
                  onClick={e => setTarget(getClickedPosition(e))}
            />
            {world.setting.map(item => <circle {...item} key={item.id}/>)}
            {world.mobs.map(item => <circle {...item} key={item.id}/>)}
            {displayEggo(world.eggo)}
        </svg>
    </Panel>
);

const mapStateToProps = ({world}) => ({world});
const dispatchToProps = {
    selectMob: selectMob,
    selectSetting: selectSetting,
    setTarget: setTarget
};

export default connect(mapStateToProps, dispatchToProps)(Main);