import React from 'react'
import {connect} from 'react-redux'
import { Table, Button } from 'antd';
import {
    getAccountBalance, getAccountError, getAccountUser, getAccountWallet, isAccountAvailable,
    isAccountLoading,
} from '../../selectors'

class Account extends React.PureComponent {
    render() {
        const {available, user, wallet, balance, error, isLoading} = this.props;


        if (isLoading) {
            return <div>
                <h2>Account data</h2>
                <p>Fetching your account data</p>
            </div>
        }

        if (error) {
            return <div>
                <h2>Account data</h2>
                <p style={{color: 'red'}}>{error}</p>
            </div>
        }

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
            <h2>Account data</h2>
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
    error: getAccountError(state),
});

export default connect(mapStateToProps)(Account);
