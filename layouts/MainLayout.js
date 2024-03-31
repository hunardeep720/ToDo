import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textBold:{
    fontWeight: 'bold',
  },
  justifyCenter:{
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
  },
  fontXl:{
    fontSize: 22,
  },
  marginBottom:{
    margin: 10,
  },
  marginY:{
    marginTop: 6,
    marginBottom: 6,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textColor:{
    color: '#D6EFD6',
  },
  bg:{
    backgroundColor: '#000000',
  },
  w_full:{
    width: '100%',
  },
  justifyStart:{
    justifyContent: 'flex-star',
  },
  all0:{
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
    easterEggButton: {
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    h_screen: {
      height: '100%',
    },
});

export default MainLayout;
