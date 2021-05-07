import Taro from '@tarojs/taro'
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '../../core/reducers'
import './index.scss'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type State = {}

type IProps = StateProps & DispatchProps & PageOwnProps

class Template extends Component<IProps> {
    state: State = {}

    render () {
        return (
            <View className='index'>
                <View><Text>Hello, World</Text></View>
            </View>
        )
    }
}

function mapStateToProps(state: RootState): StateProps {
    return {}
}


const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, null, AnyAction>): DispatchProps => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Template)