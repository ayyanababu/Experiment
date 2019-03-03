import React, { Component } from 'react'
import { Text, View, SafeAreaView , TouchableOpacity} from 'react-native'


export default class HomeContainer extends Component {

  goToDetails = () => {
      this.props.navigation.navigate('details')
  }
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
        <Text> HomeScreen </Text>
        <TouchableOpacity onPress={this.goToDetails}>
                    <Text style={{ color: 'white', alignSelf: 'center',height: 50, paddingHorizontal: 20, backgroundColor: 'orange'}}>goToDetailspage</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
