import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem
        onPress={() => enterChat(id, chatName)}
        key={id} bottomDivider>
          <Avatar 
          rounded
          source={{
              uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
          }}
          />
          <ListItem.Content>
              <ListItem.Title style={{ fontWeight: "800" }}>
                    {chatName}
              </ListItem.Title>
              <ListItem.Subtitle
               numberOfLines={1}
               ellipsizeMode="tail"
               >
               hey !!
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
