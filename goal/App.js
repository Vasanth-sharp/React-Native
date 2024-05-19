import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import GoalItems from "./components/GoalItems";
import  {StatusBar}  from "expo-status-bar";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalArray, setGoalArray] = useState([]);

  const deleteItem = (index) => {
    setGoalArray(
      goalArray.filter((el, ind) => {
        return index != ind;
      })
    );
  };

  return (
    <>
    <StatusBar style="light"/>
      <View style={styles.home}>
        <Image
          source={require("./assets/images/dart.png")}
          style={styles.img}
        />
        <View style={styles.input_container}>
          <TextInput
            placeholder="Enter your goal"
            style={styles.input_field}
            value={goal}
            onChangeText={(text) => {
              setGoal(text);
            }}
          />
          <Button
            title="submit"
            onPress={() => {
              setGoalArray([...goalArray, goal]);
              setGoal("");
            }}
          />
        </View>
        <View style={styles.goal_container}>
          <FlatList
            data={goalArray}
            renderItem={(goalItems) => {
              return (
                <GoalItems
                  goalItems={goalItems}
                  deleteItem={() => deleteItem(goalItems.index)}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  home: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  input_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 20,
    borderBottomColor: "#ced4da",
    paddingBottom: 10,
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input_field: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#ced4da",
    marginRight: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  goal_container: {
    flex: 4,
    marginTop: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginHorizontal: "auto",
    marginVertical: 20,
  },
});
