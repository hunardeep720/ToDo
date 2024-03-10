import { React, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { List } from "./TodoList";
import { Form } from "./ToDoForm";

function App() {
  let [list, setList] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  let [list1, setList1] = useState(["DO LAUNDRY", "GO TO GYM", "WALK DOG"]);
  const addTask = (task) => {
    if(!list1.includes(task.toUpperCase())){
      setList1([...list1, task.toUpperCase()]);
      setList([...list, task]);
    }
    // list1.includes(task.toUpperCase()) ? null : setList([...list, task]);
    
  };
  return (
    <SafeAreaView>
      <List tasks={list} />
      <Form addTask={addTask}/>
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