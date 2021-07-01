import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Eye } from '../assets/svg';

export const CustomInput = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
  label,
  isSmall,
  hasEye,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.address, isSmall && styles.smallView]}>
        <Text style={styles.email}>{label}</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          value={value}
          keyboardType={type}
          style={styles.input}
          placeholder={placeHolder}
          placeholderTextColor="black"
          onChangeText={onChange}
          secureTextEntry={secure}
        />
        <TouchableOpacity>{hasEye ? <Eye /> : <View />}</TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  smallView: {},
  email: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  address: {
    backgroundColor: '#81AA66',
    paddingHorizontal: 10,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 13,
    top: -10,
    zIndex: 100,
  },
  container: {
    marginTop: 30,
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    width: '90%',
  },
});
