import React, { useState, } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { Svg, Defs, Rect, Mask } from 'react-native-svg'
import { Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';
import styles from '../../styles/StyleSheets'
import { COLORS, FONTS, ROUTES } from '../../constants';
import BottomTabNavigator from '../../navigations/BottomTabNavigator';
import { useRoute } from '@react-navigation/native';

const Barcode_Screen = ({ navigation }) => {
  // set front camera or back camera
  const device = useCameraDevice('back')


  // set textScanner
  const [titleText, setTitleText] = useState(null)
  // const str_scanner = null
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`)
      console.log(codes[0].value)
      const scannedText = codes[0].value
      // setTitleText(scannedText)
      // เซ็ตค่าให้กับ state ด้วย setTitleText
      if (scannedText !== null) {
        setTitleText(codes[0].value);
        console.log(`Scanned_ `, titleText)
        if (setTitleText !== null && titleText !== null) {
          // str_scanner= titleText
          console.log(`goBack_ `);
          navigation.navigate(ROUTES.BY_RUNNING, { text_scann: titleText });
        }
      }
    }
  })

  function CameraFrame() {
    return (
      < Svg
        height="100%"
        width="100%" >
        <Defs>
          <Mask
            id='mask'
            x="0"
            y="0"
            height="100%"
            width="100%" >
            <Rect height="100%" width="100%" fill="#fff" />
            <Rect x="15%" y="28%" width="250" height="250" fill="black" />
          </Mask>
        </Defs>
        <Rect height="100%" width="100%" fill="rgba(0, 0, 0,0.8)" mask='url(#mask)' />

        {/* Frame Border */}
        <Rect
          x="15%" y="28%" width="250" height="250" strokeWidth="5" stroke={COLORS.primary} fill="#ffffff00"
        />
      </Svg >
    )
  }


  return (
    <View style={styles.containerScan}>
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
          enableZoomGesture
        />
        <CameraFrame />
      </View>

      {/* Label 1 */}
      <View style={{ position: 'absolute', top: '15%', left: '0', right: '0', alignItems: 'center' }}>
        <Text style={{ ...FONTS.h1, color: 'white', fontWeight: 700 }}>
          Scan... {titleText}
        </Text>
      </View>

      {/* Label  */}
      <View style={{ position: 'absolute', top: '65%', left: '0', right: '0', alignItems: 'center' }}>
        <Text style={{ ...FONTS.body5, color: '#ffffff', textAlign: 'center' }}>
          วาง QR Code หรือ Bar Code ภายในกรอบ {"\n"} เพื่อเข้าถึงข้อมูล
        </Text>
        <Text style={{ ...FONTS.h3, color: 'white', textAlign: 'center', fontWeight: 800, marginTop: '33%', textDecorationLine: 'underline', }}
          onPress={() => navigation.goBack()}>
          กลับไปหน้าหลัก
        </Text>

      </View>


    </View>
  )
}

export default Barcode_Screen