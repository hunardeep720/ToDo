import React,{useState} from 'react';
import MainLayout, {styles} from '../layouts/MainLayout';
import { Text, View,  Button, TouchableOpacity, StyleSheet} from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const AboutScreen = () => {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      setEasterEggActive(true);
    }
  }, [isFocused]);
  const appName = "To-Do App";
  const authorName = "Hunardeep Singh";
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
        <View style={[styles.center, styles.bg, styles.w_full]}>
        {easterEggActive && (
        <TouchableOpacity
          style={styles.easterEggButton}
          onPress={() => setEasterEggActive(false)}
        >
          <Text style={[styles.textBold, styles.fontXl,styles.marginY, styles.textColor]}>Author</Text>
        </TouchableOpacity>
      )}
      {!easterEggActive && (
        <TouchableOpacity
          style={styles.easterEggButton}
          onPress={() => setEasterEggActive(true)}
        >
          <Text style={[styles.textBold, styles.fontXl,styles.marginY, styles.textColor]}>{authorName}</Text>
        </TouchableOpacity>
      )}

      <Text style={[styles.textBold, styles.fontXl,styles.marginY, styles.textColor]}>App Name: {appName}</Text>
      
      <Text style={[styles.textBold, styles.fontXl,styles.marginY, styles.textColor]}>Current Date: {currentDate}</Text>
    </View>
    </MainLayout>
    
  );
}

export default AboutScreen;
