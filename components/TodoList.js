import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "../layouts/MainLayout";
import ToDoForm from "./ToDoForm";

const TaskList = () => {
  let [taskList, setTaskList] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  let [taskListUpper, setTaskListUpper] = useState(taskList.map((task) => task.toUpperCase()));
  const addNewTask = (task) => {
    if(!taskListUpper.includes(task.toUpperCase())){
      setTaskListUpper([...taskListUpper, task.toUpperCase()]);
      setTaskList([...taskList, task]);
    }
  }
  return (
    <ScrollView>
      <View>
        {taskList.map((task, index) => (
          <Text key={index} style={[styles.taskText, styles.marginY,styles.textColor]}>
            &#8226; {task}
          </Text>
        ))}
        <ToDoForm style={[styles.center,{marginTop:50}]} addTask={addNewTask} />
      </View>
    </ScrollView>
  );
};
export default TaskList;