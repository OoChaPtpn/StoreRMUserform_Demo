import React from 'react'
import { Text, View, ScrollView, TextInput } from 'react-native'
// import { TextInput } from 'react-native-paper';
import styles from '../../styles/StyleSheets'
import { COLORS, FONTS } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ByRunning_Screen = () => {
    const [number, onChangeNumber] = React.useState('');
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{ color: COLORS.dark, ...FONTS.h3, }}>Running No.</Text>
                <TextInput
                    style={[styles.txInput, { ...FONTS.body3, color: COLORS.dark }]}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                />

                <Text style={{ color: COLORS.dark, ...FONTS.h3, }}>To Location</Text>
                <TextInput
                    style={[styles.txInput, { ...FONTS.body3, color: COLORS.dark }]}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                />

                <Text style={{ color: COLORS.dark, ...FONTS.h3, }}>Operator</Text>
                <TextInput
                    style={[styles.txInput, { ...FONTS.body3, color: COLORS.dark }]}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                />

                <Text style={{ color: COLORS.dark, ...FONTS.h3, }}>Status</Text>



                <View style={[styles.ViewInput]}>
                    <Icon
                        name={'clipboard-text-outline'}
                        style={{ color: COLORS.grey40, fontSize: 22 }}
                    />
                    <TextInput
                        style={[, { ...FONTS.body3, color: COLORS.dark, width: '100%' }]}
                        onChangeText={onChangeNumber}
                        value={number}
                        keyboardType="text"
                    />
                </View>

            </ScrollView>
            
        </View>
    )
}
export default ByRunning_Screen