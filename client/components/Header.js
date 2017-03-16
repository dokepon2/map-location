import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import { grey50 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { SignOutUser } from '../lib/actions/signinAction';
import firebase from '../config'

class Header extends React.Component {

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.props.dispatch(SignOutUser());
            }
        })
    }

    handleLogoutFacebook() {
        firebase.auth().signOut()
            .then(function () {
                console.log('user has disconnect')
            }).catch(function (error) {
                console.log(`Error: ${error.message} , ${error.code}`)
            });
    }

    renderWithUser() {
        return (
            <AppBar
                iconElementLeft={
                    <IconButton href="/">
                        <ActionHome color={grey50} />
                    </IconButton>
                }
                iconElementRight={
                    <IconMenu
                        iconButtonElement={
                            <IconButton style={{ padding: 0 }}>
                                <Avatar src={this.props.user.photoURL} size={50} />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Sign out" onTouchTap={this.handleLogoutFacebook.bind(this)} />
                    </IconMenu>
                }
            />
        )
    }


    render() {
        if(this.props.user){
            return this.renderWithUser()
        }else{
            return (
            <AppBar
                iconElementLeft={
                    <IconButton href="/">
                        <ActionHome color={grey50} />
                    </IconButton>
                }
            />
        )
        }
    }
}


export default connect((store) => {
    return {
        user: store.user
    }
})(Header);