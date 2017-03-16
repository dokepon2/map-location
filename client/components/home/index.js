import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import Signin from '../signin/index';
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        return (
            <Signin />
        )
    }
}


export default connect((store) => {
    return {
        user: store.user
    }
})(Home);