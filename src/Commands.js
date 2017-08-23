import React from 'react';
import {connect} from 'react-redux';
import {ListGroup, ListGroupItem, Panel} from "react-bootstrap";


const Commands = ({commands}) => (
    <Panel>
        <ListGroup>
            {commands.map(item => <ListGroupItem key={item.id}>{item.name}</ListGroupItem>)}
        </ListGroup>
    </Panel>
);

const mapStateToProps = ({commands}) => ({commands});

export default connect(mapStateToProps)(Commands);