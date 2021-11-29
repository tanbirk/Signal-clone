import { NavigationContainer } from '@react-navigation/native'
import React, { useLayoutEffect }  from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomListItem from '../components/CustomListItem'
import { auth , db } from "../firebase"
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"


const HomeScreen = ({ navigation }) => {

    const signOut =() => {
        auth.signOut().then(()=> {
            navigation.replace("Login")
        })
    }

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
                    <TouchableOpacity activeOpacity={0.5}>
                    <SimpleLineIcons name='pencil' size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )
        })

    }, [navigation])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
