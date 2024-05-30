import { View, Text } from "react-native";
import React from "react";
import {
  Box,
  Button,
  HStack,
  ListItem,
  Spacer,
  VStack,
} from "@react-native-material/core";

export default function Detail({ route, navigation }) {
  const { item, handleDelete } = route.params;

  return (
    <VStack m={20} spacing={20}>
      <ListItem
      title={item.subject}
      secondaryText={item.content}
    />
      <HStack mt={20}>
        <Button
          title="Delete"
          onPress={() => {
            handleDelete(item.id);
            setTimeout(() => {
              navigation.pop();
            }, 1000);
          }}
        />
        <Spacer />
        <Button title="close" onPress={() => navigation.pop()} />
      </HStack>
    </VStack>
  );
}
