import React from 'react'
import {connect} from "react-redux";
import {isUserSigned} from "../../selectors/index";
import {signUserIn} from "../../actions/index";
import {bindActionCreators} from "redux";
import {signUserError} from "../../actions";
import {getSigninError} from "../../selectors";
import {GoogleLogin} from "react-google-login";

class Login extends React.PureComponent {
    onSuccess (googleUser) {
        this.props.signUserIn(googleUser)
    }

    onFailure({error}) {
        this.props.signUserError(error);
    }

    render () {
        const {error} = this.props;
        return <div>
            {!error && <GoogleLogin
                clientId="92976465020-r6qkg7b11kkv46i9j0l3gfqlsr4llnh5.apps.googleusercontent.com"
                onSuccess={this.onSuccess.bind(this)}
                onFailure={this.onFailure.bind(this)}
            />}
            {error && <p style={{color: 'red'}}>error</p>}
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