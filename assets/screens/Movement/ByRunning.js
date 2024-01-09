import React from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/StyleSheets'
import { COLORS,FONTS } from '../../constants'


const ByRunning_Screen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: COLORS.error, ...FONTS.body4, }}>
                Running
            </Text>

        </View>
    )
}
export default ByRunning_Screen