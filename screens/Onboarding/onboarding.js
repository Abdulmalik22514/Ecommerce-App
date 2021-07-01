import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Google, Spliff } from '../../assets/svg';
import { CustomButton } from '../../components/button';
import * as Images from '../../assets/pictures';
import { OnboardingStyles as styles } from './onboardStyles';

export default function Onboarding({ navigation }) {
  return (
    <ImageBackground source={Images.Background} style={styles.container}>
      <StatusBar style="light" />
      <Spliff style={styles.flower} />
      <Text style={styles.spliff}>Spliff</Text>
      <View style={styles.stay}>
        <Text style={styles.high}>Stay High. Stay Happy. Always.</Text>
      </View>
      <View style={styles.touches}>
        <CustomButton
          titleColor={true}
          isSmall
          title="Join"
          onPress={() => navigation.navigate('account')}
        />
        <CustomButton
          hasBorder
          isSmall
          title="Log In"
          onPress={() => navigation.navigate('select')}
        />
      </View>
      <View style={styles.option}>
        <Google />
        <Text style={styles.continue}>Continue with google</Text>
      </View>
    </ImageBackground>
  );
}
