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
            textInput_Holder : null,
            btnValue: false,
            newId : null
        }
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

    actItem = () => {
      if (!this.state.textInput_Holder){
        return;
      }
      const items = this.state.array;
      if (this.state.btnValue === false) {
        this.state.array.push({id : items.length + 100, title: this.state.textInput_Holder, status: 'false'});
        this.setState({
          items,
          textInput_Holder: null
        });
          
      } else {
        items.map( item => {
          if (this.state.newId === item.id){   
            
            item.title = this.state.textInput_Holder; 
          }
          return item;
        })
       
        this.setState({
          btnValue: false
        })
      }
      this.textInputRef.clear();  
    }

    changeToEdit = (id) => {
      const items = this.state.array;
      items.map( item => {
        if (id === item.id){   
          this.setState({
            textInput_Holder: item.title,
            btnValue: true,
            newId: id
          })
        }
        return item;
      })
      
    }

    render(){
        return(
          <View style={styles.MainContainer}>
              <View style={styles.add}>
                  <TextInput 
                    ref={ref => this.textInputRef = ref}
                    placeholder='New todo'
                    onChangeText={textInput_Holder => this.setState({ textInput_Holder })}
                    value = {this.state.textInput_Holder}
                    style={styles.textInputStyle}
                   />

                  <TouchableOpacity onPress={this.actItem} style={styles.button}>
                      <Text >
                        {this.state.btnValue ? "Edit" : "Add"}
                      </Text>
                  </TouchableOpacity>
              </View>
            
            <FlatList
              data = {this.state.array}
              keyExtractor = {item => item.id}
              renderItem = {({item}) => 
               <View style={styles.addItem}>
                <ListItem > 
                 <CheckBox 
                  checked = {item.status} 
                  onPress = {()=> this.checkItem(item.id)}
                  color = "green"
                  />
                </ListItem> 
                <Text style={styles.item}>{item.title}</Text>
                <TouchableOpacity style={styles.act} onPress = {()=> this.changeToEdit(item.id)} >
                    <Icon type="FontAwesome" name="edit" style={styles.edit}  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.act} onPress = {()=> this.removeItem(item.id)} >
                    <Icon type="FontAwesome" name="trash" style={styles.del}  />
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
    textAlignVertical: 'center',
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

  act: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    height: 44,
    
  },

  del: {
    color: 'red'
  },

  edit: {
    color: 'blue'
  }
 
 
});


