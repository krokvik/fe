import React from 'react'
import {connect} from "react-redux";
import {isUserSigned} from "../../selectors/index";
import {signUserIn} from "../../actions/index";
import {bindActionCreators} from "redux";

class Login extends React.PureComponent {
    componentDidMount () {
        const { isLogged } = this.props;

        if (isLogged === false) {
            window.gapi.signin2.render('sing-in-button', {
                'scope': 'https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/userinfo.profile',
                'width': 300,
                'height': 50,
                'longtitle': true,
                'theme': 'dark',
                'onsuccess': this.onSuccess.bind(this),
                'onfailure': this.onFailure.bind(this),
            });
        }
    }

    onSuccess (googleUser) {
        this.props.signUserIn(googleUser)
    }

    onFailure(error) {
        console.log(error);
    }

    render () {
        return <div id="sing-in-button">
        </div>
    }
}

const mapStateToProps = (state) => ({
    isLogged: isUserSigned(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    signUserIn
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);