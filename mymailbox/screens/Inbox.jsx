import { FlatList, Modal, ToastAndroid } from "react-native";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  FAB,
  Icon,
  ListItem,
  Stack,
  TextInput,
  Text
} from "@react-native-material/core";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Inbox({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [mails, setMails] = useState([]);
  const handleDelete = (id) => {
    setMails(
      mails.filter((mail) => {
        return mail.id != id;
      })
    );
  };
  const handleNavigate = (item) => {
    navigation.push("Detail", { item, handleDelete });
  };
  const handleModal = () => {
    setVisible(!visible);
  };
  const handleAdd = () => {
    if (subject == "" || content == "") {
      ToastAndroid.show("cannot be empty",ToastAndroid.SHORT)
    } else {
      let id;
      if (mails.length <= 0) {
        id = 1;
      } else {
        id = mails[mails.length - 1].id + 1;
      }
      setMails([...mails, { id: id, subject: subject, content: content }]);
      setSubject("");
      setContent("");
    }
  };
  return (
    <>
      <Box>
        <Modal visible={visible} animationType="slide">
          <TextInput
            label="Enter subject"
            variant="outlined"
            style={{ margin: 14 }}
            value={subject}
            onChangeText={(text) => setSubject(text)}
          />
          <TextInput
            label="Enter a Content"
            variant="outlined"
            style={{ margin: 14 }}
            value={content}
            onChangeText={(text) => setContent(text)}
          />
          <Button title="submit" onPress={handleAdd} variant="contained" style={{width:150,marginHorizontal:"auto"}}/>
          <Stack fill justify="start" items="center" mt={20}>
            <FAB
              icon={(props) => <Icon name="close" {...props} />}
              color="primary"
              onPress={handleModal}
            />
            {/* if without destructuring props inside plus will not in color/not appear */}
          </Stack>
        </Modal>
        <FlatList
          data={mails}
          renderItem={({ item }) => (
            <ListItem
              leadingMode="avatar"
              leading={
                <Avatar
                  image={{
                    uri: `https://mui.com/static/images/avatar/${item.id}.jpg`,
                  }}
                />
              }
              title={item.subject}
              secondaryText={item.content}
              onPress={() => handleNavigate(item)}
            />
          )}
        />
      </Box>
      <Stack fill justify="start" items="center" mt={20}>
        <FAB
          icon={(props) => <Icon name="plus" {...props} />}
          color="primary"
          onPress={handleModal}
        />
        {/* if without destructuring props inside plus will not in color/not appear */}
      </Stack>
    </>
  );
}
