import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Check, Spliff } from '../../assets/svg';
import { CustomButton } from '../../components/button';
import { CustomInput } from '../../components/input';
import { AccountStyles as styles } from './acctStyles';

export default function Account({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Spliff style={styles.flower} fill={'#81AA66'} />
      <Text style={styles.spliff}>Spliff</Text>
      <Text style={styles.create}>Create your account</Text>

      <CustomInput placeHolder="dukauwa@example.com" label="EMAIL ADDRESS" />
      <CustomInput placeHolder="" secure label="PASSWORD" isSmall hasEye />
      <View style={styles.checkCont}>
        <TouchableOpacity style={styles.checkBox}>
          {true && <Check />}
        </TouchableOpacity>
        <Text style={styles.terms}>
          By creating an account you agree with our terms and conditions
        </Text>
      </View>
      <CustomButton
        title="Create an account"
        onPress={() => navigation.navigate('home')}
      />
      <View style={styles.member}>
        <Text>Already a member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('first')}>
          <Text style={styles.already}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
