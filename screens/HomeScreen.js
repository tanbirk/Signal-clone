import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = () => {

    useLayEffect (() => {
        NavigationContainer.setOptions({
            
        })

    }, [])

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
