import React from 'react'
import {connect} from "react-redux";
import {isUserSigned} from "../../selectors/index";
import Login from '../../components/login'

class Home extends React.PureComponent {
    render () {
        const {isLogged} = this.props;

        if (isLogged === false) {
            return <Login/>
        }

        return <div>
            <h1>Hello there!</h1>
            <p>You are logged in</p>
        </div>
    }
}

const mapStateToProps = (state) => ({
    isLogged: isUserSigned(state)
});
export default connect(mapStateToProps)(Home);