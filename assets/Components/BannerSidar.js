import { Image, View} from 'react-native'
import React from 'react'

const BannerSidar = ({data}) => {
  return (
    <View>
      <Image source={data.image}
      style={{height:150,width:300,borderRadius:10}}/>
    </View>
  )
}

export default BannerSidar