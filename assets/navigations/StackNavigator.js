import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, ROUTES } from '../constants';
import { ByPallet_Screen, ByRunning_Screen, FilmSelect_Screen, Solvent_Screen, Barcode_Screen } from '../screens';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false 
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        // tabBarHideOnKeyboard: true, 
        
      }}
      initialRouteName={ROUTES.BOTTOM_TAB}
    >

      <Stack.Screen name={ROUTES.BOTTOM_TAB} component={BottomTabNavigator}
        options={{
          headerTitle: 'Running',
          title: 'Running',
          headerShown: false 
        }} />
      {/*<Stack.Screen name={ROUTES.BY_RUNNING} component={ByRunning_Screen} />
      <Stack.Screen name={ROUTES.BY_PALLET} component={ByPallet_Screen} />
        <Stack.Screen name={ROUTES.FILM_SELECT} component={FilmSelect_Screen} />
        <Stack.Screen name={ROUTES.SOLVENT} component={Solvent_Screen} /> */}
      <Stack.Screen name={ROUTES.BARCODE_SCANNER} component={Barcode_Screen}
        options={{
          headerTitle: 'Scanner',
          title: 'Scanner',
          headerShown: false 
        }} />
    </Stack.Navigator>
  )
}

export default StackNavigator