import React from 'react';
import {connect} from 'react-redux';
import {Panel} from "react-bootstrap";

const Details = ({selection}) => (
    <Panel>
        <p>{selection ? selection.type:''}</p>
    </Panel>
);

const mapStateToProps = ({selection}) => ({selection});

export default connect(mapStateToProps)(Details);