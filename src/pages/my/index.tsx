import Taro from '@tarojs/taro'
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '../../core/reducers'
import CommentDrawer from '../../components/CommentDrawer'
import './index.scss'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type State = {}

type IProps = StateProps & DispatchProps & PageOwnProps

class My extends Component<IProps> {
    state: State = {}

    render () {
        return (
            <View className='index'></View>
        )
    }
}

function mapStateToProps(state: RootState): StateProps {
    return {}
}


const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, null, AnyAction>): DispatchProps => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(My)

