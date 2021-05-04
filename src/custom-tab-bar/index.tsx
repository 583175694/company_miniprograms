import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Block } from '@tarojs/components'
import { connect } from 'react-redux'
import { RootState } from '../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import './index.scss'
import { getTabbarState } from '../core/actions/home'

type StateProps = {
  showTabbar: number
}

type DispatchProps = {
  getTabbarState(arg: any): void
}

type PageOwnProps = {}

type IProps = StateProps & DispatchProps & PageOwnProps

class customTabBar extends Component<IProps> {
  state = {
    selected: 0,
    color: 'rgba(68, 68, 68, 1)',
    selectedColor: 'rgba(68, 68, 68, 1)',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '',
        iconPath: '../assets/tab_home_select.png',
        selectedIconPath: '../assets/tab_home_select.png',
      },
      {
        pagePath: 'pages/my/index',
        text: '',
        iconPath: '../assets/tab_me_normal.png',
        selectedIconPath: '../assets/tab_me_normal.png',
      },
    ],
  }

  switchTab = (item, index) => {
    const url = '/' + item.pagePath
    this.props.getTabbarState({tabbarState: index})

    Taro.switchTab({
      url: url
    })
  }

  render() {
    const { showTabbar } = this.props
    return (
      <Block>
        {showTabbar !== -1 && (<View className='bottom-tab'>
          {this.state.list.map((item, index) => {
            return (
              <View className='bottom-tab-item' onClick={this.switchTab.bind(this, item, index)} data-path={item.pagePath} key={item.text}>
                <Image className={`bottom-tab-item-img ${showTabbar === index && 'active'}`} src={showTabbar === index ? item.selectedIconPath : item.iconPath}/>
                <View className='bottom-tab-item-text' style={{ color: this.state.selected === index ? this.state.selectedColor : this.state.color, }} >
                  {item.text}
                </View>
              </View>
            )
          })}
        </View>)}
      </Block>
    )
  }
}

function mapStateToProps(state: RootState): StateProps {
    return {
      showTabbar: state.HomeReducer.tabbarState
    }
}


const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, null, AnyAction>): DispatchProps => {
    return {
      getTabbarState: (e) => {
        dispatch(getTabbarState(e))
      }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(customTabBar)