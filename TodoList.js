import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "./App";

export const List = ({ tasks }) => {
  return (
    <ScrollView>
      <View>
        {tasks.map((task, index) => (
          <Text key={index} style={styles.taskText}>
            &#8226; {task}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};