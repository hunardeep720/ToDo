import { React, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
} from "react-native";
import { List } from "./TodoList";
import { Form } from "./ToDoForm";

function App() {
  let [list, setList] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <SafeAreaView>
      <List tasks={list} />
      <Form />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
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
});

export default App;
