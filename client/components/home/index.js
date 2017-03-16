import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import Signin from '../signin/index';

import Map from '../map';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    render() {

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Signin />
                    </Col>
                </Row>          
            </Grid>
        )
    }
}

export default Home;