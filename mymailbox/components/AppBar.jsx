import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'

export default function AppBar({title}) { // In here if we need a icon we should set Icon component provider in app
  // so that it avilable prop as Iconcomponet
  const navigate=useNavigation()
  const handlePress=()=>
    {
        navigate.openDrawer()
    }
    return (  
    <View style={styles.header}> 
    <Icon name='menu' size={30} style={styles.icon} color='white' onPress={handlePress}/>
    <Text variant='h5' color='white'>{title}</Text>
    </View> //And after design we have to render it in routes "InboxStack"
  )
}

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#6200EE",
        left:-16
    },
    icon:{
        position:"absolute",
        left:30
    }
})