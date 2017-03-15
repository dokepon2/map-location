import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import Paper from 'material-ui/Paper';
import FacebookBox from 'material-ui-community-icons/icons/facebook-box';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from '../../config'


class Signin extends React.Component {

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                console.log(user)
            }else{
                console.log('no have user')
            }
        })
    }

    handleAuth() {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                let token = result.credential.accessToken;
                let user = result.user;
                console.log(user)

            }).catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                let email = error.email;
                let credential = error.credential;
            });
    }

    handleLogout() {
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
                                onTouchTap={this.handleAuth.bind(this)}
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

export default Signin;