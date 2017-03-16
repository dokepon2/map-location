import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import Paper from 'material-ui/Paper';
import FacebookBox from 'material-ui-community-icons/icons/facebook-box';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from '../../config'
import { connect } from 'react-redux';
import { SignInUser } from '../../lib/actions/signinAction';

class Signin extends React.Component {

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.dispatch(SignInUser(user));
            } else {
                console.log('no have user')
            }
        })
    }

    handleAuthFacebook() {
        let provider = new firebase.auth.FacebookAuthProvider();

        let authFacebook = firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var token = result.credential.accessToken;
                var user = result.user;
            }).catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                let email = error.email;
                let credential = error.credential;
            });

    }

    handleLogoutFacebook() {
        firebase.auth().signOut().then(function () {
            console.log('user has disconnect')
        }).catch(function (error) {
            console.log(`Error: ${error.message}`)
        });
    }

    render() {
        return (
            <Grid>
                <Row center="xs">
                    <Col xs={4}>
                        <Paper zDepth={3} className={styles.paperSignin}>
                            <RaisedButton
                                onTouchTap={this.handleAuthFacebook.bind(this)}
                                label="Sign in with Facebook"
                                primary={true}
                                icon={<FacebookBox />}
                            />
                        </Paper>
                    </Col>
                </Row>
            </Grid>

        )
    }
}




export default connect()(Signin);