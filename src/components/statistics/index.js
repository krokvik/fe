import React from 'react'
import {
    getTodayCoins, getTodaySteps, getYesterdayCoins, getYesterdaySteps, isClaimDone, isClaimLoading,
    isStatisticsAvailable,
} from '../../selectors'
import {connect} from 'react-redux'
import { Table, Button } from 'antd';
import {bindActionCreators} from 'redux'
import {postClaim} from '../../actions/claim'

class Statistics extends React.PureComponent {
    enterLoading = () => {
        this.props.postClaim();
    }

    render() {
        const {yesterdaySteps, yesterdayCoins, todaySteps, todayCoins, isDone, isLoading, available} = this.props;

        if (!available) {
            return null
        }

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
                    {!isDone &&
                     <Button type="primary" loading={isLoading} onClick={this.enterLoading}>
                        Claim
                    </Button>}
                    {isDone && <span>Claim requested</span>}
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
    isLoading: isClaimLoading(state),
    isDone: isClaimDone(state),
    available: isStatisticsAvailable(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    postClaim
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
