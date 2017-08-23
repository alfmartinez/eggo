import React, {Component} from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import Commands from './Commands';
import Details from './Details';
import Main from './Main';


class App extends Component {
    render() {
        return (
            <Grid className="App container">
                <Row>
                    <Col xs={2} md={2}><Commands/></Col>
                    <Col xs={8} md={8}><Main/></Col>
                    <Col xs={2} md={2}><Details/></Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
