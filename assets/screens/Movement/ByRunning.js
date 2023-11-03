import React from 'react'
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native'
import { Button } from 'react-native-paper';
import styles from '../../styles/StyleSheets'
import { FONTS, COLORS, ROUTES, SIZES } from "../../constants";
import { SelectList } from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/Ionicons';

import { Camera, CodeScanner, useCameraDevice } from 'react-native-vision-camera';

const ByRunning_Screen = ({ navigation }) => {
    const [text_PickNo, onPickNoChange] = React.useState("");
    const [text_Depart, onDepartChange] = React.useState("");
    const [drop_Oparation, onOparationChange] = React.useState("");
    const [text_Running, onRunningChange] = React.useState("");

    const data = [
        { value: 'Mobiles' },
        { value: 'Appliances' },
        { value: 'Cameras' },
        { value: 'Computers' },
        { value: 'Vegetables' },
        { value: 'Diary Products' },
        { value: 'Drinks' },
    ]

    // Set Camera use front or back Camera
    const device = useCameraDevice('back')
    React.useEffect(() => {
        //Camera
        checkPermission();

    }, []);

    // Permission Camera
    const checkPermission = React.useCallback(async () => {
        const newCameraPermission = await Camera.requestCameraPermission();
        console.warn(newCameraPermission);
        if (newCameraPermission === 'denied') await Linking.openSettings()
    }, [])

    function renderCamera() {
        if (device == null) {
            return (
                <View style={{ height: 300, flex: 1 }} />
            )
        } else {
            return (
                <View style={{ height: 300, flex: 1 }}>
                    <Camera
                        style={{ flex: 1 }}
                        device={device}
                        isActive={true}
                        enableZoomGesture
                    />
                </View>
            )
        }
    }


    return (
        <View style={styles.container}>
            <ScrollView>


                {/* Pick No. */}
                <View>
                    <Text style={{ color: COLORS.dark, ...FONTS.h3, }}>Pick No.</Text>
                    <Pressable onPress={() => navigation.navigate(ROUTES.BY_PALLET)}>
                        <TextInput
                            style={[styles.txInput, { ...FONTS.body3 }]}
                            onChangeText={onPickNoChange}
                            value={text_PickNo}
                            placeholder="แตะเพื่อสแกน Pick number"
                            //keyboardType="visible-password"
                            editable={false}
                        />
                    </Pressable>
                </View>


                {/* Depament. */}
                {/* show auto query form DB */}
                <View style={{ marginTop: SIZES.margin }}>
                    <Text style={{ color: COLORS.dark, ...FONTS.h3, }}>แผนก</Text>
                    <TextInput
                        style={[styles.txInput, { ...FONTS.body3 }]}
                        onChangeText={onDepartChange}
                        value={text_Depart}
                        placeholder="แผนก"
                        //keyboardType="visible-password"
                        editable={false}
                    />
                </View>

                {renderCamera()}
                {/* Oparation */}
                <View style={{ marginTop: SIZES.margin }}>
                    <Text style={{ color: COLORS.dark, ...FONTS.h3, }}>ผู้ดำเนินการ {drop_Oparation}</Text>
                    <SelectList

                        onSelect={() => console.log(drop_Oparation)}
                        setSelected={onOparationChange}
                        data={data}
                        searchicon={<Icon name="search-outline" size={12} color={COLORS.dark} />}
                        search={true}
                        boxStyles={{ borderRadius: 0, borderColor: COLORS.grey, marginTop: SIZES.margin / 3 }} //override default styles
                        fontFamily="Anuphan-Regular"
                        searchPlaceholder=" ค้นหา"
                        placeholder="เลือกผู้ดำเนินการ"
                        notFoundText="ไม่พบข้อมูล"

                    />
                </View>


                {/* Running No. */}
                <View style={{ marginTop: SIZES.margin }}>
                    <Text style={{ color: COLORS.dark, ...FONTS.h3, }}>Running No.</Text>
                    <Pressable onPress={() => navigation.navigate(ROUTES.BY_PALLET)}>
                        <TextInput
                            style={[styles.txInput, { ...FONTS.body3 }]}
                            onChangeText={onRunningChange}
                            value={text_Running}
                            placeholder="แตะเพื่อสแกน Running No"
                            //keyboardType="visible-password"
                            editable={false}
                        />
                    </Pressable>
                </View>


                {/* Explan */}
                <Text style={{ color: COLORS.error, ...FONTS.body4, }}>
                    **กดปุ่ม "ถัดไป" เพื่อทำการ Scan ตัดสินค้าออกจากระบบ
                </Text>


                {/* Button */}
                <View style={{ marginTop: SIZES.margin, justifyContent: 'flex-end', flexDirection: 'row', }}>

                    <Button
                        disabled={!Boolean(text_PickNo && text_Depart && drop_Oparation && text_Running)}
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        icon="chevron-right"
                        mode="contained"
                        onPress={() => console.log('Pressed')}>
                        ถัดไป
                    </Button>
                </View>




            </ScrollView>
        </View>
    )
}

export default ByRunning_Screen