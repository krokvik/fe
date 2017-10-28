import React from 'react'
import {connect} from "react-redux";
import {isUserSigned} from "../../selectors/index";
import {signUserIn} from "../../actions/index";
import {bindActionCreators} from "redux";
import {signUserError} from "../../actions";
import {getSigninError} from "../../selectors";

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
        this.props.signUserError(error);
    }

    render () {
        const {error} = this.props;
        return <div>
            <div id="sing-in-button"></div>
            {error}
        </div>
    }
}

const mapStateToProps = (state) => ({
    isLogged: isUserSigned(state),
    error: getSigninError(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    signUserIn,
    signUserError,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);