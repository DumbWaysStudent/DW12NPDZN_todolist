import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, TextInput } from 'react-native';

 
export default class ToDoList extends Component {
 
  constructor() {
  
    super();
 
      this.array = [
        {id:1, title:'work'},
        {id:2, title:'swim'},
        {id:3, title:'study'},
        {id:4, title:'sleep'},
        {id:5, title:'run'}
      ],
 
      this.state = {
        text:'New todo',
        arrayHolder: [],
        textInput_Holder: null
 
      }
 
  }
 
  addItem = () => {
 
    this.array.push({title : this.state.textInput_Holder});
    this.setState({ arrayHolder: [...this.array] })
    this.textInputRef.clear();
 
  }
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
        <View style={styles.add}>
          <TextInput
            autoCorrect={false} 
            ref={ref => this.textInputRef = ref}
            placeholder={this.state.text}
            onChangeText={data => this.setState({ textInput_Holder: data })}
            style={styles.textInputStyle} 
          />
          <TouchableOpacity onPress={this.addItem} style={styles.button} >
            <Text> Add </Text>
          </TouchableOpacity>
        </View>
        
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

  add: {
    flexDirection: 'row',
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
    
  },
 
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    borderRadius: 7,
    marginTop: 12,
    marginHorizontal: 2
  },

  button: {
  
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '18%',
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    borderRadius: 7,
    marginTop: 12,
    marginHorizontal: 2

  },
 
 
});

