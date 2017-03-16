import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { grey50 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends React.Component {


    render() {
        return (
            <AppBar
                iconElementLeft={
                    <IconButton href="/">
                        <ActionHome color={grey50} />
                    </IconButton>
                }
                iconElementRight={
                    <Avatar
                        src={this.props.user.photoURL}
                        size={50}
                    />
                }
            />
        )
    }
}


export default connect((store) => {
    return {
        user: store.user
    }
})(Header);