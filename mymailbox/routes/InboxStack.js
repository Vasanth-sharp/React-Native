import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inbox from "../screens/Inbox";
import Detail from "../screens/Detail";
import AppBar from "../components/AppBar";
const stack = createNativeStackNavigator();
export const InboxStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="InboxScreen"
        component={Inbox}
        options={{ headerTitle: () => <AppBar title="Inbox" /> }}
      />
      <stack.Screen name="Detail" component={Detail} />
    </stack.Navigator>
  );
};
