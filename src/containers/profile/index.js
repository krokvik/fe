import React from 'react'
import {isUserSigned} from "../../selectors";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {bindActionCreators} from "redux";

class Profile extends React.PureComponent {
    componentWillMount() {
        const {isLogged, redirectToLogin} = this.props;

        if (isLogged === false) {
            redirectToLogin();
        }
    }

    render () {
        return <div>
            <h1>Testing</h1>
        </div>
    }
}

const mapStateToProps = (state) => ({
    isLogged: isUserSigned(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    redirectToLogin: () => push('/')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
