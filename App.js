
import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

 
export default class ToDoList extends Component {
 
  constructor() {
  
    super();
 
      this.array = [
        {id:1, title:'work'},
        {id:2, title:'swim'},
        {id:3, title:'study'},
        {id:4, title:'sleep'},
        {id:5, title:'run'}
      ]
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
        <FlatList
          data={this.array}
          renderItem={({ item }) => 
          <View style={styles.addItem}>
            <Text style={styles.item} > {item.title} </Text>
          </View>
          }
        />
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    backgroundColor: '#e5e5e5',
    flex: 1,
    margin: 2
 
  },

  addItem: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
 
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: '80%',
    
  }
});



