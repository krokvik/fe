import React from 'react'
import {getStatisticError, isStatisticFetching, isUserSigned} from "../../selectors";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {bindActionCreators} from "redux";
import {fetchStatistics} from "../../actions";

class Profile extends React.PureComponent {
    componentWillMount() {
        const {isLogged, redirectToLogin, fetchStatistics} = this.props;

        if (isLogged === false) {
            redirectToLogin();
        }

        fetchStatistics()
    }

    render () {
        const {isFetching, error} = this.props;
        let content;

        if (isFetching) {
            content = <h3>Fetching</h3>
        } else if (error) {
            content = <p style={{color: 'red'}}>{error}</p>
        } else {
            content = <p>This is your statistics</p>
        }

        return <div>
            <h1>This is your profile statistics</h1>
            {content}
        </div>
    }
}

const mapStateToProps = (state) => ({
    isLogged: isUserSigned(state),
    isFetching: isStatisticFetching(state),
    error: getStatisticError(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    redirectToLogin: () => push('/'),
    fetchStatistics
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
