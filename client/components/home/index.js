import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import Signin from '../signin/index';
import { connect } from 'react-redux';
import LoadingState from '../Loading';
import firebase from '../../config'

import Map from '../map';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
    }

    componentWillMount() {
        let self = this
        firebase.auth().onAuthStateChanged(user => {
            if (user) {

            }
            self.setState({
                loading: true
            })
        })

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
    renderNotLogin() {
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

    render() {
        if (this.state.loading) {
            if (this.props.user) {
                return this.renderOnLogin()
            }
            else {
                return this.renderNotLogin()
            }
        }
        else {
            return (
                <div>
                    <LoadingState />
                </div>
            )
        }

    }
}


export default connect((store) => {

    return {
        user: store.user
    }
})(Home);