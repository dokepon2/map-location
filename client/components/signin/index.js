import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import Paper from 'material-ui/Paper';
import FacebookBox from 'material-ui-community-icons/icons/facebook-box';
import RaisedButton from 'material-ui/RaisedButton';

class Signin extends React.Component {
    render() {
        
        return (
            <Grid>
                <Row center="xs">
                    <Col xs={4}>
                        <Paper zDepth={3} className={styles.paperSignin}>
                            <RaisedButton 
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