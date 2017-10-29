import React from 'react'
import {isUserSigned} from '../../selectors';
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {bindActionCreators} from "redux";
import SettingsForm from '../../components/settings'

class Profile extends React.PureComponent {
    componentWillMount() {
        const {isLogged, redirectToLogin} = this.props;

        if (isLogged === false) {
            redirectToLogin();
        }
    }

    render () {
        return <div>
            <h1>This is your profile settings</h1>
            <p>Please, provide wallet ID, so you can receive coins for you sport achievements</p>
            <div style={{width: '400px'}}>
                <SettingsForm />
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    isLogged: isUserSigned(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    redirectToLogin: () => push('/')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
