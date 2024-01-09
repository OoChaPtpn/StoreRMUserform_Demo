import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native'
import { Button } from 'react-native-paper';
import styles from '../../styles/StyleSheets'
import { FONTS, COLORS, ROUTES, SIZES } from "../../constants";
import { SelectList } from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { useRoute } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info'
import AsyncStorage from '@react-native-async-storage/async-storage';

const FilmSelect_Screen = ({ navigation }) => {
    const [text_PickNo, onPickNoChange] = useState(null);
    const [text_Depart, onDepartChange] = useState(null);
    const [drop_Oparation, onOparationChange] = useState(null);

    let str_localDeviceID = "localDeviceID";
    let str_localDeviceName = "localDeviceID";

    const data = [
        { value: 'Mobiles' },
        { value: 'Appliances' },
        { value: 'Cameras' },
        { value: 'Computers' },
        { value: 'Vegetables' },    
        { value: 'Diary Products' },
        { value: 'Drinks' },
    ]

    const route = useRoute();
    // const testValue = route.params && route.params.text_scann;
    // const testValue = route.params?.text_scann;
    // onPickNoChange(testValue)

    // console.log("testValue : ", testValue," __route.params?.test__  ", route.params?.text_scann)
    // console.log(typeof (typeof route.params?.text_scann))
    // onPickNoChange(testValue);

    const getdeviceID = async () => {
        let uniDeviceName = await DeviceInfo.getDeviceName();
        console.log("uniDeviceName : " + JSON.stringify(uniDeviceName));
        let uniUniqueId = await DeviceInfo.getUniqueId();
        console.log("uniDeviceName : %s, uniUniqueId: %s" , JSON.stringify(uniDeviceName), JSON.stringify(uniUniqueId));
        return { 'UnitDName': uniDeviceName, 'UnitID': uniUniqueId }
    }

    const setDataLocal = async (UnitDName, UnitID) => {
        // เช็ค deviceName ระหว่างเครื่องกับ DB ว่าชื่อนี้มี UniqueId ตรงกับมั้ย
        if (UnitDName != null && UnitID != null) {
            console.log("setDataLocal deviceName: %s ,deviceID: %s ", UnitDName, UnitID);
            await AsyncStorage.setItem("set_UniDeviceName", UnitDName);
            await AsyncStorage.setItem("set_UniId", UnitID);
            
            let getLoUniId = await AsyncStorage.getItem("set_UniId");
            let getLoDevName = await AsyncStorage.getItem("set_UniDeviceName");
            console.log('showDataLocal getLolUniId: %s, getLoDevName: %s', typeof getLoUniId, getLoDevName);
            str_localDeviceID = getLoUniId;
            str_localDeviceName = getLoDevName;
            console.log('useState localDeviceID: %s, localDeviceName: %s', str_localDeviceID, str_localDeviceName);

        } else {
            console.log("else setDataLocal deviceID: %s ,deviceName: %s " + UnitID, UnitDName);
        }
    }

    // Set Camera use front or back Camera
    const device = useCameraDevice('back')
    React.useEffect(() => {
        //Camera
        checkPermission();
        if (route.params?.text_scann) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
        console.log("route.params", route.params?.post);

        getdeviceID().then((value) => {
            setDataLocal(value.UnitID, value.UnitDName);
        });
    }, [route.params?.text_scann]);


    // Permission Camera
    const checkPermission = React.useCallback(async () => {
        const newCameraPermission = await Camera.requestCameraPermission();
        console.warn(newCameraPermission);
        if (newCameraPermission === 'denied') await Linking.openSettings();
    }, [])

    // //const textScanner
    // const [titleText, setTitleText] = useState("wait")
    // function renderCamera(){
    //     const codeScanner: CodeScanner = {
    //         codeTypes: ['qr', 'ean-13'],
    //         onCodeScanned: (codes) => {
    //             console.log(`Scanned ${codes[0].value} codes!`)
    //             console.log(typeof codes[0].value)
    //             console.log(`setTitleText >> `, typeof setTitleText)
    //             const scannedText = codes[0].value;
    //             if (scannedText !== undefined) {
    //                 setTitleText(scannedText);
    //             }
    //         },
    //     };
    //     console.log(`Scanned___ `, titleText)
    //     if (device == null) {
    //         return (
    //             <View style={{ height: 300, flex: 1 }} />
    //         )
    //     } else {
    //         return (
    //             <View style={{ height: 300, flex: 1 }}>
    //                 <Camera
    //                     style={{ flex: 1 }}
    //                     device={device}
    //                     isActive={true}
    //                     enableZoomGesture
    //                     codeScanner={codeScanner}
    //                 />
    //             </View>
    //         )
    //     }
    // }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Pick No. */}
                <View>
                    <Text style={{ color: COLORS.dark, ...FONTS.h3, }}>Pick No.</Text>
                    <Pressable onPress={() =>
                        navigation.navigate(ROUTES.BARCODE_SCANNER)}>
                        <TextInput
                            style={[styles.txInput, { ...FONTS.body3, color: COLORS.dark }]}
                            onChangeText={route.params?.text_scann}
                            value={route.params?.text_scann}
                            placeholder="แตะเพื่อสแกน Pick number"
                            
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
                    // editable={false}
                    />
                </View>

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
                {/* <View style={{ marginTop: SIZES.margin }}>
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
                </View> */}


                {/* Explan */}
                <Text style={{ color: COLORS.error, ...FONTS.body4, }}>
                    **กดปุ่ม "ถัดไป" เพื่อทำการ Scan ตัดสินค้าออกจากระบบ
                </Text>


                {/* Button */}
                <View style={{ marginTop: SIZES.margin, justifyContent: 'flex-end', flexDirection: 'row', }}>

                    <Button
                        //disabled={!Boolean(text_PickNo && text_Depart && drop_Oparation && text_Running)}
                        contentStyle={{ flexDirection: 'row-reverse' }}
                        icon="chevron-right"
                        mode="contained"
                        onPress={() => console.log('Pressed')}>
                        {/* onPress={()=>navigation.navigate(ROUTES.BARCODE_SCANNER)}> */}
                        ถัดไป
                    </Button>
                </View>




            </ScrollView>
        </View>
    )
}

export default FilmSelect_Screen