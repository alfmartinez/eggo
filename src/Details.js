import React from 'react';
import {connect} from 'react-redux';

const Details = ({selection}) => (
    <div>
        {selection ? selection.type:''}
    </div>
);

const mapStateToProps = ({selection}) => ({selection});

export default connect(mapStateToProps)(Details);