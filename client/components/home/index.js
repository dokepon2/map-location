import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import Signin from '../signin/index';
import { connect } from 'react-redux';
import LoadingState from '../Loading';

import Map from '../map';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
    }

    componentWillMount() {
        this.setState({ loading: true });
    }

    renderOnLogin() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Map />
                    </Col>
                </Row>
            </Grid>

        )
    }

    LoginOutState() {
        console.log()
    }


    render() {
        if (this.props.user) {
            return this.renderOnLogin()
        } else {
            return (
                <Grid>
                    <Row>
                        <Col xs={12}>
                            {
                                this.state.loading &&
                                <LoadingState />
                            }
                            {
                                !this.state.loading &&
                                <Signin />
                            }
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