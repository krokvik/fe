import React from 'react'
import {
    getClaimError, getStatisticError,
    getTodayCoins, getTodaySteps, getYesterdayCoins, getYesterdaySteps, isClaimDone, isClaimLoading,
    isStatisticFetching,
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
        const {yesterdaySteps, yesterdayCoins, todaySteps, todayCoins, isDone, isLoading, available, error, statisticsError, isFetchingStatistics} = this.props;

        if (isFetchingStatistics) {
            return <div>
                <h2>Account statistics</h2>
                <p>Fetching your statistics</p>
            </div>
        }

        if (statisticsError) {
            return <div>
                <h2>Account statistics</h2>
                <p style={{color: 'red'}}>{statisticsError}</p>
            </div>
        }

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
                <div>
                    <span>
                        {!isDone &&
                         <Button type="primary" loading={isLoading} onClick={this.enterLoading}>
                            Claim
                        </Button>}
                        {isDone && <span>Claim requested</span>}
                    </span>
                    {isDone && <span>Claim requested</span>}
                    {error && <span style={{color: 'red'}}>Error</span>}
                </div>
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
            <h2>Account statistics</h2>
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
    error: getClaimError(state),
    statisticsError: getStatisticError(state),
    isFetchingStatistics: isStatisticFetching(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    postClaim
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
