import React from 'react'
import {
    getTodayCoins, getTodaySteps, getYesterdayCoins, getYesterdaySteps
} from '../../selectors'
import {connect} from 'react-redux'
import { Table, Icon } from 'antd';

class Statistics extends React.PureComponent {
    render() {
        const {yesterdaySteps, yesterdayCoins, todaySteps, todayCoins} = this.props;

        const columns =  [{
            title: 'Day',
            dataIndex: 'day',
            key: 'day',
        }, {
            title: 'Steps',
            dataIndex: 'steps',
            key: 'steps',
        }, {
            title: 'Rewards',
            dataIndex: 'reward',
            key: 'reward',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                record.canClaim &&
                <span>
                    <a href="#">Claim</a>
                </span>
            ),
        }];
        const data = [{
            key: '1',
            day: 'Yesterday',
            steps: yesterdaySteps,
            reward: yesterdayCoins,
            canClaim: true,
        }, {
            key: '2',
            day: 'Today',
            steps: todaySteps,
            reward: todayCoins,
            canClaim: false,
        }];

        return <div>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    }
}


const mapStateToProps = (state) => ({
    yesterdaySteps: getYesterdaySteps(state),
    yesterdayCoins: getYesterdayCoins(state),
    todaySteps: getTodaySteps(state),
    todayCoins: getTodayCoins(state),
});

export default connect(mapStateToProps)(Statistics);
