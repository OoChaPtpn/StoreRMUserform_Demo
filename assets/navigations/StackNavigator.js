import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import { ByPallet_Screen, ByRunning_Screen, FilmSelect_Screen, Solvent_Screen } from '../screens';
import styles from '../styles/StyleSheets';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, title: "Movements" }}
      initialRouteName={ROUTES.FILM_SELECT} >

      <Stack.Screen name={ROUTES.BY_RUNNING} component={ByRunning_Screen} />
      <Stack.Screen name={ROUTES.BY_PALLET} component={ByPallet_Screen} />
      <Stack.Screen name={ROUTES.FILM_SELECT} component={FilmSelect_Screen} />
      <Stack.Screen name={ROUTES.SOLVENT} component={Solvent_Screen} />
      {/* <Stack.Screen name={ROUTES.BARCODE_SCANNER} component={Barcode_Screen} /> */}

    </Stack.Navigator>
  )
}

export default StackNavigator