import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native'
// import { TextInput } from 'react-native-paper';
import styles from '../../styles/StyleSheets'
import { COLORS, FONTS } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

const ByRunning_Screen = () => {
    const [number, onChangeNumber] = useState('');
    const [age, setAge] = useState('');
    const [value, setValue] = useState(null);

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
                        keyboardType="default"
                    />
                </View>
                <View>
                    <Dropdown
                        style={[styles.txInput, { ...FONTS.body3, color: COLORS.dark }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select item"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                        setValue(item.value);
                        }}
                        renderLeftIcon={() => (
                        <Icon style={styles.icon} color="black" name="account-search-outline" size={20} />
                        )}
                    />
                </View>

            </ScrollView>
            
        </View>
    )
}
export default ByRunning_Screen