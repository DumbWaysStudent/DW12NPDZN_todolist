import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {Icon, CheckBox, ListItem} from 'native-base';

export default class ToDoList extends Component {
    constructor(){
        super();
        this.state = {
            array : [
              {id:1, title:'work', status:'false'},
              {id:2, title:'swim', status:'false'},
              {id:3, title:'study', status:'false'},
              {id:4, title:'sleep', status:'false'},
              {id:5, title:'run', status:'false'}
              ],
            text:'New todo',
            arrayHolder: [],
            textInput_Holder : null,
        }
    }
   

    addItem = () => {
      this.state.array.push({id : this.state.array.length + 1, title: this.state.textInput_Holder});
      this.setState({ arrayHolder: [...this.state.array] });
      this.textInputRef.clear();
    }

    removeItem = (id) => {
      const items = this.state.array;
      const newItems = items.filter(item => item.id !== id);
      this.setState({
        array : newItems
      })
    }

    checkItem = (id) => {
      const items = this.state.array;
      const newItems = items.map( item => {
        if (id == item.id){
          item.status = !item.status;
        }
        return item;
      })
      this.setState({
        array : newItems
      })
    }

    render(){
        return(
          <View style={styles.MainContainer}>
              <View style={styles.add}>
                  <TextInput 
                    autoCorrect={false} 
                    ref={ref => this.textInputRef = ref}
                    placeholder={this.state.text} 
                    onChangeText={textInput_Holder => this.setState({ textInput_Holder }) } 
                    style={styles.textInputStyle}
                   />

                    <TouchableOpacity onPress={this.addItem} style={styles.button}>
                        <Text >Add</Text>
                    </TouchableOpacity>
              </View>
            
            <FlatList
              data = {this.state.array}
              keyExtractor = {item => item.id}
              renderItem = {({item}) => 
               <View style={styles.addItem}>
                <ListItem style = {styles.check}> 
                 <CheckBox 
                  checked = {item.status} 
                  onPress = {()=> this.checkItem(item.id)}
                  />
                </ListItem> 
                <Text style={styles.item}>{item.title}</Text>
                <TouchableOpacity style={styles.del} onPress = {()=> this.removeItem(item.id)} >
                    <Icon type="FontAwesome" name="trash" style={styles.icon}  />
                </TouchableOpacity>
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
    width: '65%',
    
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

  del: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    height: 44,
    justifyContent: 'center',
  },

  icon: {
    color: 'red'
  },

  check: {
    color:'green'
  }
 
 
});


