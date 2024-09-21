import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa o ícone

const CustomCheckbox = ({ textTask }) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(textTask)

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <Icon name="checkmark" size={20} color="#fff" />}
      </View>
      <Text style={styles.label}>{textTask}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#4CAF50', // Cor do checkbox quando marcado
    borderColor: '#4CAF50',
  },
  label: {
    fontSize: 16,
    color: 'white',
  },
});

export default CustomCheckbox;
