import Taro from '@tarojs/taro'
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from '@tarojs/components'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import './index.scss'
import avatar from '../../assets/img_avatar.png'
import url1 from '../../assets/iPhone12.png'
import url2 from '../../assets/iPhone12-2.png'
import url3 from '../../assets/ipad.png'
import url4 from '../../assets/airTags.png'
import url5 from '../../assets/iPhone12.png'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {}

type State = {
  containerHeight: string
  list: Array<any>
}

type IProps = StateProps & DispatchProps & PageOwnProps

class Welfare extends Component<IProps> {
    state: State = {
      containerHeight: '',
      list: [{
        title: 'Apple 中国官方',
        subtitle: 'Apple 中国官方',
        url: url1
      }, {
        title: 'Apple 中国官方',
        subtitle: 'Apple 中国官方',
        url: url2
      }, {
        title: 'Apple 中国官方',
        subtitle: 'Apple 中国官方',
        url: url3
      }, {
        title: 'Apple 中国官方',
        subtitle: 'Apple 中国官方',
        url: url4
      }, {
        title: 'Apple 中国官方',
        subtitle: 'Apple 中国官方',
        url: url5
      }]
    }

    componentDidMount() {
      const that = this
      const query = Taro.createSelectorQuery()
      query.selectViewport().scrollOffset().exec(function(res){
        that.setState({
          containerHeight: res[0].scrollHeight - 158 + 'px'
        })
      })
    }

    render () {
      const { containerHeight, list } = this.state
      return (
        <View className='welfare'>
          <View className="banner">
            <View className="mask"></View>
          </View>
          <View className="container" style={{'height': containerHeight}}>
            <Image className="c-avatar" src={avatar}></Image>
            <Text className="c-name">Apple 中国官方</Text>
            {list && list.map((res: any, index: number) => {
              return (
                <View className="welfare-item">
                  <Image className="w-avatar" src={res.url}></Image>
                  <View className="title">
                    <Text>{res.title}</Text>
                    <Text>{res.subtitle}</Text>
                  </View>
                  <View className="receive">
                    <Text>领取</Text>
                  </View>
                </View>
              )
            })}
          </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(Welfare)