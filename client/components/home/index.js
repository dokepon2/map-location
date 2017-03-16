import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import Signin from '../signin/index';
import { connect } from 'react-redux';

import Map from '../map';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    renderOnLogin() {
        return (
            <Map />
        )
    }


    render() {
        if (this.props.user) {
            return this.renderOnLogin()
        } else {
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
}


export default connect((store) => {
    return {
        user: store.user
    }
})(Home);