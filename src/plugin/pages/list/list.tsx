import React, { Component } from 'react'
import { View, Video, Button } from '@tarojs/components'
import ListItem from '../../components/listItem/listItem'
import './list.less'

import Taro from '@tarojs/taro'


export default class Index extends Component {
  state = {
    list: [{
      name: 'A',
      value: '1'
    }, {
      name: 'B',
      value: '2'
    }, {
      name: 'C',
      value: '3'
    }]
  }
  handlePlay() {
    console.log(this);
    const videoCtx = Taro.createVideoContext('video');
    console.log('videoCtx: ', videoCtx)
    videoCtx.play();
  }

  render () {
    return (
      <View>
        <Video
          id='video'
          src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
          poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          autoplay={false}
          loop={false}
          muted={false}
        />
        <Button onClick={this.handlePlay}>播放</Button>
        {this.state.list.map(item => {
          return <ListItem name={item.name} value={item.value} key={item.name} />
        })}
      </View>
    )
  }
}
