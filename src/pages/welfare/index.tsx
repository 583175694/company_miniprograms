import Taro from '@tarojs/taro'
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from '@tarojs/components'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '../../core/reducers'
import './index.scss'
import avatar from '../../assets/img_avatar.png'
import url1 from '../../assets/iPhone12.png'
import url2 from '../../assets/iPhone12-2.png'
import url3 from '../../assets/ipad.png'
import url4 from '../../assets/airTags.png'

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
        url: url3
      }, {
        title: 'Apple 中国官方',
        subtitle: 'Apple 中国官方',
        url: url2
      }, {
        title: 'Apple 中国官方',
        subtitle: 'Apple 中国官方',
        url: url1
      }, {
        title: 'Apple 中国官方',
        subtitle: 'Apple 中国官方',
        url: url4
      }, {
        title: 'Apple 中国官方',
        subtitle: 'Apple 中国官方',
        url: url1
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
        url: url1
      }]
    }

    componentDidMount() {
      const that = this
      const query = Taro.createSelectorQuery()
      query.selectViewport().scrollOffset().exec(function(res){
        that.setState({
          containerHeight: res[0].scrollHeight - 122 + 'px'
        })
      })
    }

    render () {
      const { containerHeight, list } = this.state
      return (
        <View className='welfare'>
          <View className='banner'>
            <View className='mask'></View>
          </View>
          <Image className='c-avatar' src={avatar}></Image>
          <View className='container' style={{'height': containerHeight}}>
            <Text className='c-name'>Apple 中国官方</Text>
            {list && list.map((res: any, index: number) => {
              return (
                index === 0 ?
                // 第一条数据
                <View className='welfare-item-first'>
                  <Image className='first-bg' src={res.url} mode='aspectFill'></Image>
                  <View className='mask'></View>
                  <View className='title'>
                    <Text>{res.title}</Text>
                    <Text>{res.subtitle}</Text>
                  </View>
                  <View className='receive'>
                    <Text>领取</Text>
                  </View>
                </View> :
                // 其他数据
                <View className='welfare-item'>
                  <Image className='w-avatar' src={res.url}></Image>
                  <View className='title'>
                    <Text>{res.title}</Text>
                    <Text>{res.subtitle}</Text>
                  </View>
                  <View className='receive'>
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