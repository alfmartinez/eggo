import React from 'react';
import {connect} from 'react-redux';
import {selectMob, selectSetting} from './store/selection/actions';
import {setTarget, startGame, stopGame} from './store/world/actions';
import {Panel, Button, Glyphicon} from "react-bootstrap";

let point, svg;

const displayEggo = ({heading, speed, ...props}) => (
    <circle {...props}/>
);

function getClickedPosition(evt) {
    point.x = evt.clientX;
    point.y = evt.clientY;
    var cursorpt = point.matrixTransform(svg.getScreenCTM().inverse());
    return cursorpt;
}

const Main = ({world, selectMob, selectSetting, setTarget, startGame, stopGame}) => (
    <Panel bsStyle="info" header={
        <div className="controls">
            <Button onClick={() => startGame()} active={!world.paused}><Glyphicon glyph="play"/></Button>
            <Button onClick={() => stopGame()} active={world.paused}><Glyphicon glyph="pause"/></Button>
        </div>
    }>
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
    setTarget: setTarget,
    startGame: startGame,
    stopGame: stopGame
};

export default connect(mapStateToProps, dispatchToProps)(Main);