import { NavigationContainer } from '@react-navigation/native'
import React, { useLayoutEffect, useState }  from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomListItem from '../components/CustomListItem'
import { auth , db } from "../firebase"
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import { useEffect } from 'react'


const HomeScreen = ({ navigation }) => {

    const [chats, setChats] = useState([])



    const signOut =() => {
        auth.signOut().then(()=> {
            navigation.replace("Login")
        })
    }

    useEffect(() => {
       const unsubscribe =db.collection('chats')
        .onSnapshot(snapshot => (
         setChats(snapshot.docs.map(doc => ({
             id: doc.id,
             data: doc.data()
         })))   
        ))
        return unsubscribe
    }, [])


    useLayoutEffect(() => {
            navigation.setOptions({
            title: "Signal",
            headerStyle : { backgroundColor: "#fff"},
            headerTitleStyle: { color: "black"},
            headerTintColor: "black",
            headerLeft:() => (<View style={{ marginLeft: 20}}>
                <TouchableOpacity 
                onPress={signOut}
                activeOpacity={0.5}>
                <Avatar rounded source ={{uri: auth?.currentUser?.photoURL}} />
                </TouchableOpacity>
            </View>
            ),
            headerRight:() => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                    <AntDesign name="camera" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("AddChat")}
                    activeOpacity={0.5}>
                    <SimpleLineIcons name='pencil' size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )
        })

    }, [navigation])


    const enterChat =(id, chatName) => {
        navigation.navigate('Chat', {
            id: id,
            chatName: chatName
        })
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({id, data:{ chatName }}) => (
                     <CustomListItem 
                     key={id}
                     id={id}
                     chatName={chatName}
                     enterChat={enterChat}
                     />
                ))}
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        height: '100%'
    }
})
