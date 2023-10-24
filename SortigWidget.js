import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const SortingWidget = ({ onSort }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('default');

  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => {
          setSelectedLanguage(itemValue);
          onSort(itemValue);
        }}
        style={styles.pickerText} 
      >
        <Picker.Item label="Rūšiuoti pagal" value="default" />
        <Picker.Item label="Vardą (A - Z)" value="firstname-asc" />
        <Picker.Item label="Vardą (Z - A)" value="firstname-desc" />
        <Picker.Item label="Kvalifikacijos taškus" value="qualification" />
        <Picker.Item label="Porinio važevimo taškus" value="tandem" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    width:200,
    backgroundColor: "grey",
    opacity: 0.4,
    bottom: 40,
    left: 14,
  },
  pickerText: {
    color: 'white', 
  },
});

export default SortingWidget;
