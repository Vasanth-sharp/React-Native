import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Draft from "../screens/Draft";
import AppBar from "../components/AppBar";

const stack = createNativeStackNavigator();
export const DraftStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="DraftScreen"
        component={Draft}
        options={{ headerTitle: () => <AppBar title="Draft" /> }}
      />
    </stack.Navigator>
  );
};
