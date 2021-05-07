import Taro from '@tarojs/taro'
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, Video } from '@tarojs/components'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '../../core/reducers'
import './index.scss'
import iconGift from '../../assets/icon_present.svg'
import iconLike from '../../assets/icon_like.svg'
import iconFavorite from '../../assets/icon_favorite.svg'
import iconComments from '../../assets/icon_comments.svg'
import avatar from '../../assets/img_avatar.png'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {
  item: string
  onShowDrawer(): void
}

type State = {}

type IProps = StateProps & DispatchProps & PageOwnProps
class VideoWrap extends Component<IProps> {
  state: State = {}

  // 跳转福利页
  toWelfare() {
    Taro.navigateTo({
      url: '/pages/welfare/index'
    })
  }

  render() {
    return (
      <View className='video-wrap'>
        <Video
          className='video'
          autoplay
          loop
          src={this.props.item}
          enablePlayGesture={false}
          showFullscreenBtn={false}
          controls={false}
          duration={10}
          vslideGestureInFullscreen={false}
          showPlayBtn={false}
          enableProgressGesture={false}
          showMuteBtn={false}
          objectFit='cover'
        ></Video>

        {/* 右侧操作 */}
        <View className='operation'>
          <View className='operation-item' onClick={this.toWelfare.bind(this)}>
            <Image src={iconGift} />
            <Text>领福利</Text>
          </View>
          <View className='operation-item avatar'>
            <Image src={avatar} />
            <View className='follow'>
              <Text>关注</Text>
            </View>
          </View>
          <View className='operation-item'>
            <Image src={iconLike} />
            <Text>423</Text>
          </View>
          <View className='operation-item'>
            <Image src={iconFavorite} />
            <Text>160</Text>
          </View>
          <View className='operation-item' onClick={this.props.onShowDrawer}>
            <Image src={iconComments} />
            <Text>223</Text>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoWrap)
