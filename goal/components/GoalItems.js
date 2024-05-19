import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

export default function GoalItems(props) {
  const { goalItems, deleteItem } = props;
  return (
    <View style={styles.goal_item}>
      <Pressable
        onPress={() => {
          deleteItem();
        }}
        // android_ripple={{ color: "white" }}
        style={({ pressed }) => [
            { backgroundColor: pressed ? '#d1c4e9' : 'purple' },
            styles.pressed_item
          ]}
      >
        <Text style={styles.goal_text}>{goalItems.item}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    goal_item: {
      borderRadius: 8,
      backgroundColor: 'purple',
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
    goal_text: {
      margin: 10,
      padding: 10,
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
    },
    pressed_item: {
      borderRadius: 8,
    },
  });
