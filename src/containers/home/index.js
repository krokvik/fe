import React from 'react'
import {connect} from "react-redux";
import {isUserSigned} from "../../selectors/index";
import Login from '../../components/login'
import {
    getStatisticError, isStatisticFetching, isStatisticsAvailable,
} from '../../selectors';
import Statistics from '../../components/statistics'

class Home extends React.PureComponent {
    render () {
        const {isLogged, isFetching, error, available} = this.props;
        let content;

        if (isLogged === false) {
            return <Login/>
        }

        if (isFetching) {
            content = <h3>Fetching</h3>
        } else if (error) {
            content = <p style={{color: 'red'}}>{error}</p>
        } else if (available) {
            content = <Statistics />
        }

        return <div>
            <h1>Hello there!</h1>
            {content}
        </div>
    }
}

const mapStateToProps = (state) => ({
    isLogged: isUserSigned(state),
    isFetching: isStatisticFetching(state),
    error: getStatisticError(state),
    available: isStatisticsAvailable(state),
});

export default connect(mapStateToProps)(Home);
