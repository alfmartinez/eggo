import React from 'react';
import {connect} from 'react-redux';

const Commands = ({commands}) => (
    <ul>
        {commands.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
);

const mapStateToProps = ({commands}) => ({commands});

export default connect(mapStateToProps)(Commands);