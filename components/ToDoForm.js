import { React, useState } from "react";
import { View, TextInput, Button } from "react-native";
import {styles} from "../layouts/MainLayout";
const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");
  const buttonPress = () => {
    addTask(taskText);
    setTaskText("");
  };
  return (
    <View style={[styles.form]}>
      <TextInput
        style={[styles.input,styles.textColor,{placeholderTextColor: "#D6EFD6",}]}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={buttonPress} />
    </View>
  );
};
export default ToDoForm;