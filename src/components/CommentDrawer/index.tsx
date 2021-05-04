import Taro from '@tarojs/taro'
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, Input } from '@tarojs/components'
import { RootState } from '../../core/reducers'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import './index.scss'

import close from '../../assets/icon_close.svg'
import avatar from '../../assets/img_avatar.png'

type StateProps = {}

type DispatchProps = {}

type PageOwnProps = {
  showModalStatus: boolean
  onShowDrawer(): void
  animationData: any
}

type State = {}

type IProps = StateProps & DispatchProps & PageOwnProps

class CommentDrawer extends Component<IProps> {
  state: State = {
    animationData: {}
  }

  render () {
    const { showModalStatus, animationData } = this.props
    return (
      <View className="CommentDrawer">
        {showModalStatus && <View className="drawer-screen" onClick={this.props.onShowDrawer.bind(this)}></View>}
        {showModalStatus && <View animation={animationData} className="drawer-attr-box">
          <View className="drawer-content">
            <View className="title">
              <Text>共230条评论</Text>
              <Image src={close}></Image>
            </View>
            <View className="container">
              {[0, 0, 0, 0, 0, 0].map((res) => {
                return (
                  <View className="message">
                    <View className="comment">
                      <Image className="avatar" src={avatar}></Image>
                      <View className="content">
                        <Text>Tim Cook</Text>
                        <Text>4-20</Text>
                        <Text>我们公司近期开了春季苹果发布会，发布了多款黑科技的产品，一起来关注吧！</Text>
                      </View>
                    </View>
                    <View className="reply">
                      <Image className="avatar" src={avatar}></Image>
                      <View className="content">
                        <Text>Eddy Cue <Text>回复</Text> Tim Cook</Text>
                        <Text>4-20</Text>
                        <Text>我们公司近期开了春季苹果发布会，发布了多款黑科技的产品！！</Text>
                      </View>
                    </View>
                  </View>
                )
              })}
            </View>
            <View className="input-comments">
              <Input placeholder="点击输入评论" placeholderClass="placeholder"></Input>
            </View>
          </View>
        </View>}
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


export default connect(mapStateToProps, mapDispatchToProps)(CommentDrawer)

