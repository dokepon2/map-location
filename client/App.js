import React from 'react';
import Header from './components/Header';
import styles from './main.css';
import firebase from './config'
import { connect } from 'react-redux';
import { SignInUser } from './lib/actions/signinAction';

class App extends React.Component {

	componentWillMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.props.dispatch(SignInUser(user));
			}
		})
	}


	render() {
		return (
			<div>
				<div>
					<Header />
				</div>
				<div className={styles.children_body}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default connect((store) => {
    return {
        user: store.user
    }
})(App);