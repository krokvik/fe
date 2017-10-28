import React from 'react'
import {connect} from "react-redux";
import {isUserSigned} from "../../selectors";

class Login extends React.Component {
    componentDidMount () {
        const { isLogged } = this.props;

        if (isLogged === false) {
            window.gapi.signin2.render('sing-in-button', {
                'scope': 'https://www.googleapis.com/auth/fitness.activity.read',
                'width': 200,
                'height': 50,
                'longtitle': true,
                'theme': 'dark',
                'onsuccess': this.onSuccess,
                'onfailure': this.onFailure
            });
        }
    }

    onSuccess (googleUser) {
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName(), googleUser);
    }

    onFailure(error) {
        console.log(error);
    }

    render () {
        return <div id="sing-in-button">

        </div>
    }
}

export default connect((state) => ({
    isLogged: isUserSigned(state),
}))(Login);