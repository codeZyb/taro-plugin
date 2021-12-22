import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import './index.less'

const myPluginInterface = Taro.requirePlugin('myPlugin')

export default class Index extends Component {
  componentDidMount () {
    myPluginInterface.sayHello()
    const answer = myPluginInterface.answer
    console.log('answer: ', answer)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>
          1、使用插件的component，无法获取dom元素，音视频的context
          2、通过插件的页面可以正常获取
        </Text>
        <avatar />
        <Navigator url='plugin://myPlugin/list'>
          Go to pages/list!
        </Navigator>
      </View>
    )
  }
}
  