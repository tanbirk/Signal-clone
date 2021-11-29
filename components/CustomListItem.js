import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem>
          <Avatar 
          rounded
          source={{
              uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
          }}
          />
          <ListItem.Content>
              <ListItem.Title style={{ fontWeight: "800" }}>
                    Game Chat
              </ListItem.Title>
              <ListItem.Subtitle
               numberOfLines={1}
               ellipsizeMode="tail"
               >
                Yo guys what is up !!!
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
