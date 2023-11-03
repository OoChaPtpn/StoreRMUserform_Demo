import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTS, ROUTES } from '../constants';
import { ByPallet_Screen, ByRunning_Screen, FilmSelect_Screen, Solvent_Screen } from '../screens';
import styles from '../styles/StyleSheets';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                //ซ่อน header stack.Navigator
                //headerShown:false,
                tabBarStyle: styles.tabBarStyle,
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.grey60,
                tabBarLabelStyle: FONTS.h5,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;
                    if (route.name === ROUTES.BY_RUNNING) {
                        iconName = focused ? 'reader' : 'reader-outline';
                    } else if (route.name === ROUTES.BY_PALLET) {
                        iconName = focused ? 'filter' : 'filter-outline';
                    } else if (route.name === ROUTES.FILM_SELECT) {
                        iconName = focused ? 'film' : 'film-outline';
                    } else if (route.name === ROUTES.SOLVENT) {
                        iconName = focused ? 'flask' : 'flask-outline';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },


            })}
        >
            <Tab.Screen name={ROUTES.BY_RUNNING} component={ByRunning_Screen}
                options={{
                    headerTitle: 'Move Location',
                    title: 'Running'
                }} />
            <Tab.Screen name={ROUTES.BY_PALLET} component={ByPallet_Screen}
                options={{
                    headerTitle: 'Move Pallet',
                    title: 'Pallet'
                }} />
            <Tab.Screen name={ROUTES.FILM_SELECT} component={FilmSelect_Screen}
                options={{
                    headerTitle: 'Film Selection',
                    title: 'Film Select'
                }} />
            <Tab.Screen name={ROUTES.SOLVENT} component={Solvent_Screen}
                options={{
                    headerTitle: 'Issue Slovent',
                    title: 'Solvent'
                
                }} />


        </Tab.Navigator>
    )
}

export default BottomTabNavigator