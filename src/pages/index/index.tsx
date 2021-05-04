import Taro from "@tarojs/taro"
import { Component } from "react"
import { connect } from "react-redux"
import {  Block,  Swiper,  SwiperItem,  View, Image, Text } from "@tarojs/components"
import { RootState } from "../../core/reducers"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "redux"
import VideoWrap from '../../components/VideoWrap'
import CommentDrawer from '../../components/CommentDrawer'
import { getTabbarState } from "../../core/actions/home"

import "./index.scss"

import iconSearch from "../../assets/icon_search.svg"

type StateProps = {}

type DispatchProps = {
  getTabbarState(arg: any): void
}

type PageOwnProps = {}

type State = {
  videoSrc: string
  list: Array<string>
  list2: Array<string>
  list3: Array<string>
  type: Array<string>
  src: string
  currentType: number
  currentStatu: string
  showModalStatus: boolean
  animationData: any
}

type IProps = StateProps & DispatchProps & PageOwnProps

class Index extends Component<IProps> {
  state: State = {
    videoSrc:
      "https://pressure-1255704943.cos.ap-shanghai.myqcloud.com/prod/download/VideoBackForth3.mp4",
    list: [
      "https://pressure-1255704943.cos.ap-shanghai.myqcloud.com/prod/download/VideoBackForth3.mp4",
      "https://pressure-1255704943.cos.ap-shanghai.myqcloud.com/prod/download/gaitVideoExample.mp4",
    ],
    list2: [
      "https://pressure-1255704943.cos.ap-shanghai.myqcloud.com/prod/download/VideoBackForth3.mp4",
      "https://pressure-1255704943.cos.ap-shanghai.myqcloud.com/prod/download/gaitVideoExample.mp4",
    ],
    list3: [
      "https://pressure-1255704943.cos.ap-shanghai.myqcloud.com/prod/download/VideoBackForth3.mp4",
      "https://pressure-1255704943.cos.ap-shanghai.myqcloud.com/prod/download/gaitVideoExample.mp4",
    ],
    src: "",
    type: ['深圳', '关注', '推荐'],
    currentType: 2,
    currentStatu: 'close',
    showModalStatus: false,
    animationData: {}
  }

  switchVideo(e) {
    console.log("bindchange", e.detail.current)
    let i = e.detail.current
    this.setState({
      src: this.state.list[i],
    })
  }

  switchType(e) {
    console.log("bindchange", e.detail.current)
    let i = e.detail.current
    this.setState({
      src: this.state.list[i],
      currentType: i
    })
  }

  onTapType(index) {
    let i = index
    this.setState({
      src: this.state.list[i],
      currentType: i
    })
  }

  onShowDrawer() {
    const { currentStatu } = this.state

    this.props.getTabbarState({tabbarState: currentStatu === 'open' ? -1 : 0})
    this.setState(() => ({
      currentStatu: currentStatu === 'open' ? 'close' : 'open'
    }), () => {
      this.util(this.state.currentStatu)
    })
  }

  // 评论动画
  util(currentStatu) {
    var animation = Taro.createAnimation({
      duration: 200,  //  动画时长
      timingFunction: "ease", //  线性
      delay: 0  //  0则不延迟
    })

    animation.translateY(1130).step()
    this.setState({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translateY(0).step()
      this.setState({
        animationData: animation
      })

      //关闭抽屉
      if (currentStatu == "close") {
        this.setState({
          showModalStatus: false
        })
      }
    }.bind(this), 200)

    // 显示抽屉
    if (currentStatu == "open") {
      this.setState({
        showModalStatus: true
      })
    }
  }

  render() {
    const { list, type, currentType, showModalStatus, animationData } = this.state
    return (
      <View className="index">
        {/* 顶部导航 */}
        <View className="top-nav">
          <Image src={iconSearch} />
          {type.map((res, index) => {
            return <View className="top-nav-item" onClick={this.onTapType.bind(this, index)}><Text>{res}</Text></View>
          })}
        </View>

        {/* 滚动视频 */}
        <Swiper
            className="swiper-type"
            easingFunction="default"
            current={currentType}
            onChange={this.switchType.bind(this)}
        >
          {type.map((res, index) => {
            return (
              <Block>
                <SwiperItem>
                  <Swiper
                    className="swiper"
                    vertical={true}
                    circular={true}
                    easingFunction="default"
                    onChange={this.switchVideo.bind(this)}
                  >
                    {list.map((item, index) => {
                      return (
                        <Block key={index}>
                          <SwiperItem>
                            <VideoWrap item={item} onShowDrawer={this.onShowDrawer.bind(this)}></VideoWrap>
                          </SwiperItem>
                        </Block>
                      )
                    })}
                  </Swiper>
                </SwiperItem>
              </Block>
            )
          })}
        </Swiper>
        <CommentDrawer animationData={animationData} showModalStatus={showModalStatus} onShowDrawer={this.onShowDrawer.bind(this)} />
      </View>
    )
  }
}

function mapStateToProps(state: RootState): StateProps {
  return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, null, AnyAction>): DispatchProps => {
  return {
    getTabbarState: (e) => {
      dispatch(getTabbarState(e))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)