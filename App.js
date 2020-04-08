import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      num1:'0',
      num2:'0',
      sum: '0'
    }
  }
  render(){

    return (
      <View style={styles.container}>
        <TextInput
          placeholder = 'Ingresar un numero'
          value={this.state.num1}
          onChangeText={(txt) => { this.setState({ num1: txt})}}
        />
        <TextInput
          placeholder='Ingresar un numero'
          value={this.state.num2}
          onChangeText={(txt) => { this.setState({ num2: txt }) }}
        />
        <Button 
          title='Sumar'
          onPress={() => { this.setState({ sum: Number(this.state.num1) + Number(this.state.num2)  })}}
        />
        <Text>{this.state.sum}</Text>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
