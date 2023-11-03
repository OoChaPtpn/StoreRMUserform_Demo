import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigator from './assets/navigations/StackNavigator';
import BottomTabNavigator from './assets/navigations/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>


  )
}

export default App

{/* <View>
<Text style={{ color: COLORS.dark, ...FONTS.h1, }}>My latest work is a food delivery mobile app design🍔🍕. Some other screens from the food order app we are working on.!💕 I Hope you guys will like it.
  Your feedback and appreciation is always welcome 🙂</Text>
<Text style={{ color: COLORS.dark, ...FONTS.body1, }}>ผลงานล่าสุดของฉันคือการออกแบบแอปส่งอาหารบนมือถือ🍔🍕 หน้าจออื่นๆ จากแอปสั่งอาหารที่เรากำลังดำเนินการอยู่!💕 ฉันหวังว่าพวกคุณจะชอบมัน
  ข้อเสนอแนะและความชื่นชมของคุณยินดีต้อนรับเสมอ🙂</Text>
</View> */}