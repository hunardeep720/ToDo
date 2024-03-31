import React , {useState} from "react";
import { ScrollView, View, Text } from "react-native";
import {styles} from "../layouts/MainLayout";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  let [list, setList] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  let [list1, setList1] = useState(["DO LAUNDRY", "GO TO GYM", "WALK DOG"]);
  const addTask = (task) => {
    if(!list1.includes(task.toUpperCase())){
      setList1([...list1, task.toUpperCase()]);
      setList([...list, task]);
    }
  }
  return (
    <ScrollView>
      <View>
        {list.map((l1, index) => (
          <Text key={index} style={[styles.taskText, styles.marginY,styles.textColor]}>
            &#8226; {l1}
          </Text>
        ))}
        <ToDoForm style={[styles.center,{marginTop:50}]} addTask={addTask} />
      </View>
    </ScrollView>
  );
};
export default ToDoList;
