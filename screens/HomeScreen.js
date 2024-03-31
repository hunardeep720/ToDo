import React from "react";
import MainLayout, {styles} from "../layouts/MainLayout";
import ToDoList from "../components/TodoList";
import { View, SafeAreaView, Text, StyleSheet} from "react-native";

const HomeScreen = () => {return (
    <MainLayout>
      <View style={[styles.bg, styles.w_full,styles.h_screen]}>
        <Text style={[styles.textCenter, styles.fontXl, styles.textBold, styles.marginBottom,styles.textColor,styles.justifyStart,styles.all0]}>To Do List</Text>
        <SafeAreaView style={[styles.justifyCenter,{marginTop:90}]}>
          <ToDoList style={[styles.marginY]}/>
        </SafeAreaView>
        
      </View>
    </MainLayout>
  );
};
export default HomeScreen;
