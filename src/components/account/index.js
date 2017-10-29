import React from 'react'
import {connect} from 'react-redux'
import { Table, Button } from 'antd';
import {bindActionCreators} from 'redux'
import {postClaim} from '../../actions/claim'
import {
    getAccountBalance, getAccountUser, getAccountWallet, isAccountAvailable,
    isAccountLoading,
} from '../../selectors'

class Account extends React.PureComponent {
    render() {
        const {available, user, wallet, balance} = this.props;

        if (!available) {
            return null
        }

        const columns =  [{
            title: 'User',
            dataIndex: 'user',
            key: 'user',
        }, {
            title: 'Wallet',
            dataIndex: 'wallet',
            key: 'wallet',
        }, {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
        }];
        const data = [{
            key: '1',
            user: user,
            wallet: wallet,
            balance: balance,
        }];

        return <div>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    }
}


const mapStateToProps = (state) => ({
    isLoading: isAccountLoading(state),
    available: isAccountAvailable(state),
    user: getAccountUser(state),
    wallet: getAccountWallet(state),
    balance: getAccountBalance(state),
});

export default connect(mapStateToProps)(Account);
