import {React, useState} from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./App";
export const Form = ({addTask}) => {
  const [taskText, setTaskText] = useState("");
  const buttonPress = () => {
    addTask(taskText);
    setTaskText("");
  };
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a new task..." onChangeText={(text) => setTaskText(text)} value={taskText}/>
      <Button title="Add Task" onPress={buttonPress}/>
    </View>
  );
};
